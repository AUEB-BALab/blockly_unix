// Mutator for the multiplePrint block
function getExtraBlockState(block) {
  // TODO: This is a dupe of the BlockChange.getExtraBlockState code, do we
  //    want to make that public?
  if (block.saveExtraState) {
    const state = block.saveExtraState();
    return state ? JSON.stringify(state) : '';
  } else if (block.mutationToDom) {
    const state = block.mutationToDom();
    return state ? Blockly.Xml.domToText(state) : '';
  }
  return '';
}

/**
 * Creates a minus image field used for mutation.
 * @param {Object=} args Untyped args passed to block.minus when the field
 *     is clicked.
 * @returns {Blockly.FieldImage} The minus field.
 */
function createMinusField(args = undefined) {
  const minus = new Blockly.FieldImage(
    minusImage_File,
    15,
    15,
    undefined,
    onClick_
  );
  /**
   * Untyped args passed to block.minus when the field is clicked.
   * @type {?(Object|undefined)}
   * @private
   */
  minus.args_ = args;
  return minus;
}

/**
 * Calls block.minus(args) when the minus field is clicked.
 * @param {Blockly.FieldImage} minusField The field being clicked.
 * @private
 */
function onClick_(minusField) {
  // TODO: This is a dupe of the mutator code, anyway to unify?
  const block = minusField.getSourceBlock();

  if (block.isInFlyout) {
    return;
  }

  Blockly.Events.setGroup(true);
  const oldExtraState = getExtraBlockState(block);
  block.minus(minusField.args_);
  const newExtraState = getExtraBlockState(block);

  if (oldExtraState != newExtraState) {
    Blockly.Events.fire(
      new Blockly.Events.BlockChange(
        block,
        'mutation',
        null,
        oldExtraState,
        newExtraState
      )
    );
  }
  Blockly.Events.setGroup(false);
}

const minusImage_File =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw' +
  'MC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPS' +
  'JNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAw' +
  'IDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K';

/**
 * Creates a plus image field used for mutation.
 * @param {Object=} args Untyped args passed to block.minus when the field
 *     is clicked.
 * @returns {Blockly.FieldImage} The Plus field.
 */
function createPlusField(args = undefined) {
  const plus = new Blockly.FieldImage(
    plusImage_File,
    15,
    15,
    undefined,
    onClickPlus_
  );
  /**
   * Untyped args passed to block.plus when the field is clicked.
   * @type {?(Object|undefined)}
   * @private
   */
  plus.args_ = args;
  return plus;
}

/**
 * Calls block.plus(args) when the plus field is clicked.
 * @param {!Blockly.FieldImage} plusField The field being clicked.
 * @private
 */
function onClickPlus_(plusField) {
  // TODO: This is a dupe of the mutator code, anyway to unify?
  const block = plusField.getSourceBlock();

  if (block.isInFlyout) {
    return;
  }

  Blockly.Events.setGroup(true);
  const oldExtraState = getExtraBlockState(block);
  block.plus(plusField.args_);
  const newExtraState = getExtraBlockState(block);

  if (oldExtraState != newExtraState) {
    Blockly.Events.fire(
      new Blockly.Events.BlockChange(
        block,
        'mutation',
        null,
        oldExtraState,
        newExtraState
      )
    );
  }
  Blockly.Events.setGroup(false);
}

const plusImage_File =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC' +
  '9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT' +
  'ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz' +
  'FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW' +
  'MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS' +
  '44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==';

const listCreateMutator = {
  /**
   * Number of item inputs the block has.
   * @type {number}
   */
  itemCount_: 0,

  /**
   * Creates XML to represent number of text inputs.
   * @returns {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function () {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parses XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function (xmlElement) {
    const targetCount = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_(targetCount);
  },

  /**
   * Returns the state of this block as a JSON serializable object.
   * @returns {{itemCount: number}} The state of this block, ie the item count.
   */
  saveExtraState: function () {
    return {
      itemCount: this.itemCount_
    };
  },

  /**
   * Applies the given state to this block.
   * @param {*} state The state to apply to this block, ie the item count.
   */
  loadExtraState: function (state) {
    this.updateShape_(state['itemCount']);
  },

  /**
   * Adds inputs to the block until it reaches the target number of inputs.
   * @param {number} targetCount The target number of inputs for the block.
   * @this {Blockly.Block}
   * @private
   */
  updateShape_: function (targetCount) {
    while (this.itemCount_ < targetCount) {
      this.addPart_();
    }
    while (this.itemCount_ > targetCount) {
      this.removePart_();
    }
    this.updateMinus_();
  },

  /**
   * Callback for the plus image. Adds an input to the end of the block and
   * updates the state of the minus.
   */
  plus: function () {
    this.addPart_();
    this.updateMinus_();
  },

  /**
   * Callback for the minus image. Removes an input from the end of the block
   * and updates the state of the minus.
   */
  minus: function () {
    if (this.itemCount_ == 0) {
      return;
    }
    this.removePart_();
    this.updateMinus_();
  },

  // To properly keep track of indices we have to increment before/after adding
  // the inputs, and decrement the opposite.
  // Because we want our first input to be ADD0 (not ADD1) we increment after.

  /**
   * Adds an input to the end of the block. If the block currently has no
   * inputs it updates the top 'EMPTY' input to receive a block.
   * @this {Blockly.Block}
   * @private
   */
  addPart_: function (message) {
    if (this.itemCount_ == 0) {
      this.removeInput('EMPTY');
      this.topInput_ = this.appendValueInput('ADD' + this.itemCount_)
        .appendField(createPlusField(), 'PLUS')
        .appendField(this.message_);
    } else {
      this.appendValueInput('ADD' + this.itemCount_);
    }
    this.itemCount_++;
  },

  /**
   * Removes an input from the end of the block. If we are removing the last
   * input this updates the block to have an 'EMPTY' top input.
   * @this {Blockly.Block}
   * @private
   */
  removePart_: function () {
    this.itemCount_--;
    this.removeInput('ADD' + this.itemCount_);
    if (this.itemCount_ == 0) {
      this.topInput_ = this.appendDummyInput('EMPTY')
        .appendField(createPlusField(), 'PLUS')
        .appendField(Blockly.Msg['PRINT_CREATE_EMPTY_TITLE']);
    }
  },

  /**
   * Makes it so the minus is visible iff there is an input available to remove.
   * @private
   */
  updateMinus_: function () {
    const minusField = this.getField('MINUS');
    if (!minusField && this.itemCount_ > 0) {
      this.topInput_.insertFieldAt(1, createMinusField(), 'MINUS');
    } else if (minusField && this.itemCount_ < 1) {
      this.topInput_.removeField('MINUS');
    }
  }
};

/**
 * Updates the shape of the block to have 3 inputs if no mutation is provided.
 * @this {Blockly.Block}
 */
const listCreateHelper = function (message) {
  this.message_ = message;
  this.getInput('EMPTY').insertFieldAt(0, createPlusField(), 'PLUS');
  this.updateShape_(2);
};

Blockly.Extensions.registerMutator(
  'new_list_create_with_mutator',
  listCreateMutator,
  function () {
    listCreateHelper.call(this, Blockly.Msg['PRINT_CREATE_WITH']); // Pass the desired message
  },
  listCreateHelper
);

Blockly.Extensions.registerMutator(
  'arguments_create_with_mutator',
  listCreateMutator,
  function () {
    listCreateHelper.call(this, Blockly.Msg['ARGUMENTS_CREATE_WITH']); // Pass the desired message
  },
  listCreateHelper
);

Blockly.Extensions.registerMutator(
  'files_create_with_mutator',
  listCreateMutator,
  function () {
    listCreateHelper.call(this, Blockly.Msg['FILES_CREATE_WITH']); // Pass the desired message
  },
  listCreateHelper
);

function registerConnectionRestrictionExtension(
  extensionName,
  parentBlockTypes, // Array of allowed parent block types
  inputFieldNamesMap, // Object to map block types to their input field names
  allowedBlockType,
  restrictedInputField // New parameter for the restricted input field
) {
  Blockly.Extensions.register(extensionName, function () {
    this.setOnChange(function (changeEvent) {
      if (
        changeEvent.type === Blockly.Events.BLOCK_MOVE &&
        this.id === changeEvent.blockId
      ) {
        var parentBlock = this.getParent();

        if (parentBlock && parentBlockTypes.includes(parentBlock.type)) {
          // Get the input field name based on the parent block type
          var inputFieldName = inputFieldNamesMap[parentBlock.type];

          // Check connection to the correct input field
          if (inputFieldName) {
            // Check the restricted connection (e.g., SOURCE)
            var restrictedConnection = parentBlock
              .getInput(restrictedInputField)
              .connection.targetBlock();
            if (restrictedConnection && restrictedConnection === this) {
              // Disconnect if connected to the restricted input
              if (this.outputConnection.targetConnection) {
                this.outputConnection.disconnect();
              }
            }

            // If the connected block is not this block, or if it's not the allowed block type, disconnect
            if (allowedBlockType && this.type !== allowedBlockType) {
              if (this.outputConnection.targetConnection) {
                this.outputConnection.disconnect();
              }
            }
          } else {
            // No valid input field for this parent block
            if (this.outputConnection.targetConnection) {
              this.outputConnection.disconnect();
            }
          }
        } else {
          // If the parent block is not of the expected type, disconnect
          if (this.outputConnection.targetConnection) {
            this.outputConnection.disconnect();
          }
        }
      }
    });
  });
}

registerConnectionRestrictionExtension(
  'restrict_args_block',
  ['argumentsCreate', 'mv', 'ln'],
  {
    argumentsCreate: 'EMPTY',
    mv: 'DEST',
    ln: 'TARGET'
  },
  'argument',
  'SOURCE'
);

registerConnectionRestrictionExtension(
  'restrict_filename_to_filenamesCreate',
  ['filenamesCreate'],
  { filenamesCreate: 'EMPTY' },
  'filename'
);

registerConnectionRestrictionExtension(
  'restrict_fileEndStart_to_filenamesCreate',
  ['filenamesCreate'],
  { filenamesCreate: 'EMPTY' },
  'fileEndStart'
);

registerConnectionRestrictionExtension(
  'restrict_touch_to_argumentsCreate',
  ['argumentsCreate'],
  { argumentsCreate: 'EMPTY' },
  'touch'
);
