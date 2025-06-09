var gitShowBlock = {
  type: 'git show',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      commitHash: (fieldValues) => {
        return fieldValues['commitHash'];
      }
    }
  ],
  message0: '%{BKY_GIT_SHOW}',
  args0: [
    {
      type: 'field_input',
      name: 'commitHash',
      text: 'HEAD'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_SHOW_TOOLTIP}',
  helpUrl: '%{BKY_GIT_SHOW_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitShowBlock]);

// Make the block definition findable on the window object because the type has a space
window['git showBlock'] = gitShowBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git show'] =
  window.unixGenerator.forBlock.sequence;
