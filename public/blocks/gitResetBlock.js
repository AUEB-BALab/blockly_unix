var gitResetBlock = {
  type: 'git reset',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      resetTarget: (fieldValues) => {
        return fieldValues['resetTarget'];
      }
    }
  ],
  message0: '%{BKY_GIT_RESET}',
  args0: [
    {
      type: 'field_input',
      name: 'resetTarget',
      text: '--soft HEAD~1'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_RESET_TOOLTIP}',
  helpUrl: '%{BKY_GIT_RESET_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitResetBlock]);

// Make the block definition findable on the window object because the type has a space
window['git resetBlock'] = gitResetBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git reset'] =
  window.unixGenerator.forBlock.sequence;
