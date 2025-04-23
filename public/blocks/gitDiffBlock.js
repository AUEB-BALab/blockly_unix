var gitDiffBlock = {
  type: 'git diff',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      // No arguments from fields, so this function returns an empty string.
      // The command 'git diff' will be printed due to printName: true and block type.
      message: () => {
        return '';
      }
    }
  ],
  message0: '%{BKY_GIT_DIFF}',
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_DIFF_TOOLTIP}',
  helpUrl: '%{BKY_GIT_DIFF_HELPURL}'
};

// Register the block with Blockly
Blockly.defineBlocksWithJsonArray([gitDiffBlock]);

// Make the block definition findable on the window object because the type has a space
window['git diffBlock'] = gitDiffBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git diff'] =
  window.unixGenerator.forBlock.sequence;
