/************************************************************
 * block.js
 ************************************************************/

// A dedicated UnixGenerator class to encapsulate generator functionalities
class UnixGenerator extends Blockly.Generator {
  constructor() {
    super('Unix');
    this.forBlock = {
      generic: this.handleBlock.bind(this, 'generic'),
      concat: this.handleBlock.bind(this, 'concat'),
      sequence: this.handleBlock.bind(this, 'generic')
    };
    this.connectors = {
      generic: ' | ',
      concat: '',
      sequence: ' ; ',
      default: ' '
    };
  }

  /**
   * The scrub_ function is responsible for chaining blocks together,
   * adding the appropriate connectors/transitions (e.g., "|").
   * @param {Blockly.Block} block - The current block being processed.
   * @param {string} code - The generated code for the current block.
   * @returns {string} - The combined code including chained blocks.
   */
  scrub_(block, code) {
    let nextBlock = block.getNextBlock();
    let nextCode = '';
    let isFilenameHandled = false;

    while (nextBlock) {
      const handlerFunction =
        this.forBlock[nextBlock.type] || this.forBlock.generic;
      let connector = this.getConnector(handlerFunction);

      if (block.type === 'filenamesCreate' && !isFilenameHandled) {
        nextCode += handlerFunction(nextBlock) + ' ' + code;
        isFilenameHandled = true;
      } else {
        nextCode += connector + handlerFunction(nextBlock);
      }
      nextBlock = nextBlock.getNextBlock();
    }
    return isFilenameHandled ? nextCode : code + nextCode;
  }

  /**
   * Determines the connector based on the handler function.
   * @param {Function} handlerFunction - The handler function for the block.
   * @returns {string} - The appropriate connector string.
   */
  getConnector(handlerFunction) {
    if (handlerFunction === this.forBlock.generic) {
      return this.connectors.generic;
    } else if (handlerFunction === this.forBlock.sequence) {
      return this.connectors.sequence;
    } else if (handlerFunction === this.forBlock.concat) {
      return this.connectors.concat;
    } else {
      return this.connectors.default;
    }
  }

  /**
   * Handles the block processing based on the type of handler.
   * @param {string} type - The type of handler ('generic' or 'concat').
   * @param {Blockly.Block} block - The block to process.
   * @returns {string} - The generated code for the block.
   */
  handleBlock(type, block) {
    const blockDefinition = window[`${block.type}Block`];
    const commandParts = this.handleBlocks(block, blockDefinition);
    const commandPrefix = blockDefinition.unix_description[0].printName
      ? `${block.type} `
      : '';
    return `${commandPrefix}${commandParts.join(' ')}`;
  }

  /**
   * Processes the fields and connected blocks to produce the final Unix command.
   * @param {Blockly.Block} block - The block to process.
   * @param {Object} blockDefinition - The definition of the block.
   * @returns {Array<string>} - The parts of the generated command.
   */
  handleBlocks(block, blockDefinition) {
    const fieldValues = this.collectFieldValues(block);
    const { commandParts, metadata } = this.buildCommandParts(
      block,
      blockDefinition,
      fieldValues
    );
    const description = blockDefinition.unix_description[0];

    this.processConnectedBlocks(block, description, commandParts, metadata);
    return this.finalizeCommandParts(commandParts, metadata);
  }

  /**
   * Collects all field values from a block.
   * @param {Blockly.Block} block - The block to collect field values from.
   * @returns {Object} - An object mapping field names to their values.
   */
  collectFieldValues(block) {
    return block.inputList.reduce((fields, input) => {
      input.fieldRow.forEach((field) => {
        if (field.name) {
          fields[field.name] = field.getValue();
        }
      });
      return fields;
    }, {});
  }

  /**
   * Builds the command parts and metadata from the block's fields.
   * @param {Blockly.Block} block - The block to process.
   * @param {Object} blockDefinition - The definition of the block.
   * @param {Object} fieldValues - The collected field values.
   * @returns {Object} - An object containing commandParts and metadata arrays.
   */
  buildCommandParts(block, blockDefinition, fieldValues) {
    let commandParts = [];
    let metadata = [];

    const description = blockDefinition.unix_description[0];
    const blockType = block.type;

    // Add the command name if it exists in the description
    if (!description.printName && description[blockType]) {
      const commandName = description[blockType];
      commandParts.push(commandName);
      metadata.push({ value: commandName, type: blockType });
    }

    // Iterate through each input and field to build command parts
    block.inputList.forEach((input) => {
      input.fieldRow.forEach((field) => {
        if (field instanceof Blockly.FieldTextInput) {
          if (description.hasOwnProperty(field.name)) {
            const value = this.getFieldValue(field, description, fieldValues);
            if (value) {
              commandParts.push(value);
              metadata.push({ value, type: block.type });
            }
          }
        } else {
          const value = this.getFieldValue(field, description, fieldValues);
          if (value) {
            commandParts.push(value);
            metadata.push({ value, type: block.type });
          }
        }
      });
    });

    return { commandParts, metadata };
  }

  /**
   * Retrieves the value of a field based on its type and description.
   * @param {Blockly.Field} field - The field to retrieve the value from.
   * @param {Object} description - The description object from block definition.
   * @param {Object} fieldValues - The collected field values.
   * @returns {string} - The processed value of the field.
   */
  getFieldValue(field, description, fieldValues) {
    const printDefaultValues = description.printDefaultValues;
    if (!printDefaultValues) {
      const defaultValue =
        field.defaultValue !== undefined ? field.defaultValue : '';
      const currentValue = field.getValue();
      if (currentValue === defaultValue) {
        return '';
      }
    }

    if (field instanceof Blockly.FieldDropdown) {
      if (typeof description[field.name] === 'function') {
        return description[field.name](fieldValues);
      }
      return description[field.getValue()] || '';
    } else if (field instanceof Blockly.FieldCheckbox) {
      if (
        description[field.name] &&
        typeof description[field.name] === 'function'
      ) {
        return field.getValue() === 'TRUE'
          ? description[field.name](fieldValues)
          : '';
      } else {
        return field.getValue() === 'TRUE' ? description[field.name] : '';
      }
    } else if (
      field instanceof Blockly.FieldTextInput ||
      field instanceof Blockly.FieldNumber
    ) {
      const userInput = field.getValue();
      if (
        description[field.name] &&
        typeof description[field.name] === 'function'
      ) {
        return description[field.name](fieldValues);
      } else {
        return userInput;
      }
    }
    return '';
  }

  /**
   * Processes connected child blocks and appends their code to command parts.
   * @param {Blockly.Block} block - The parent block.
   * @param {Object} description - The description object from block definition.
   * @param {Array<string>} commandParts - The array of command parts.
   * @param {Array<Object>} metadata - The metadata array.
   */
  processConnectedBlocks(
    block,
    description,
    commandParts,
    metadata,
    fieldValues = {}
  ) {
    fieldValues = this.collectFieldValues(block);
    block.inputList.forEach((input) => {
      if (input.connection && input.connection.isConnected()) {
        const childBlock = input.connection.targetBlock();
        if (childBlock) {
          const childCode = this.blockToCode(childBlock);
          if (childCode) {
            if (!input.name) {
              console.error('Input has no name:', input);
              return;
            }
            const processingFn = description[input.name];
            let processedChildCode;

            if (typeof processingFn === 'function') {
              if (processingFn.length === 2) {
                processedChildCode = processingFn(
                  fieldValues,
                  childCode.trim()
                );
              } else {
                processedChildCode = processingFn(childCode.trim());
              }
            } else {
              processedChildCode = childCode.trim();
            }

            commandParts.push(processedChildCode);
            metadata.push({ value: processedChildCode, type: childBlock.type });
          } else {
            if (!input.name) {
              console.error('Input has no name:', input);
              return;
            }

            const processingFn = description[input.name];
            if (typeof processingFn === 'function') {
              let processedChildCode;
              if (processingFn.length === 2) {
                processedChildCode = processingFn(fieldValues, null);
              } else {
                processedChildCode = processingFn(null);
              }
              commandParts.push(processedChildCode);
              metadata.push({ value: processedChildCode, type: block.type });
            }
          }
        } else {
          if (!input.name) {
            console.error('Input has no name:', input);
            return;
          }

          const processingFn = description[input.name];
          if (typeof processingFn === 'function') {
            let processedChildCode;
            if (processingFn.length === 2) {
              processedChildCode = processingFn(fieldValues, null);
            } else {
              processedChildCode = processingFn(null);
            }
            commandParts.push(processedChildCode);
            metadata.push({ value: processedChildCode, type: block.type });
          }
        }
      } else {
        if (!input.name) {
          console.error('Input has no name:', input);
          return;
        }

        const processingFn = description[input.name];
        if (typeof processingFn === 'function') {
          let processedChildCode;
          if (processingFn.length === 2) {
            processedChildCode = processingFn(fieldValues, null);
          } else {
            processedChildCode = processingFn(null);
          }
          commandParts.push(processedChildCode);
          metadata.push({ value: processedChildCode, type: block.type });
        }
      }
    });
  }

  /**
   * Finalizes the command parts by reordering arguments if necessary.
   * @param {Array<string>} commandParts - The array of command parts.
   * @param {Array<Object>} metadata - The metadata array.
   * @returns {Array<string>} - The finalized array of command parts.
   */
  finalizeCommandParts(commandParts, metadata) {
    const reorderedCommandParts = [];
    const argumentParts = [];

    metadata.forEach((part) => {
      if (part.type === 'argument' || part.type === 'argumentsCreate') {
        argumentParts.push(part.value);
      } else {
        reorderedCommandParts.push(part.value);
      }
    });

    // Append argument parts at the end
    return [...reorderedCommandParts, ...argumentParts];
  }
}

// Initialize the Unix generator instance
window.unixGenerator = new UnixGenerator();

/**
 * Generates the final Unix command from the Blockly workspace.
 * @returns {string} - The generated Unix command.
 */
function generateCommandFromWorkspace() {
  const workspace = Blockly.getMainWorkspace();
  const blocks = workspace.getTopBlocks(true);
  const commands = blocks
    .map((block) => window.unixGenerator.blockToCode(block))
    .filter(Boolean);
  return commands.join(' && ');
}
