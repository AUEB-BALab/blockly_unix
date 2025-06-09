var gitTagBlock = {
  type: 'git tag',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      tagName: (fieldValues) => {
        return fieldValues['tagName'];
      }
    }
  ],
  message0: '%{BKY_GIT_TAG}',
  args0: [
    {
      type: 'field_input',
      name: 'tagName',
      text: 'v1.0.0'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_TAG_TOOLTIP}',
  helpUrl: '%{BKY_GIT_TAG_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitTagBlock]);

// Make the block definition findable on the window object because the type has a space
window['git tagBlock'] = gitTagBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git tag'] =
  window.unixGenerator.forBlock.sequence;
