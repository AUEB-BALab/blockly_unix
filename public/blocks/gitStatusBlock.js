var gitStatusBlock = {
  type: 'git status',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      // No arguments from fields, so this function returns an empty string.
      // The command 'git status' will be printed due to printName: true and block type.
      message: () => {
        return '';
      }
    }
  ],
  message0: '%{BKY_GIT_STATUS}',
  args0: [],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_STATUS_TOOLTIP}',
  helpUrl: '%{BKY_GIT_STATUS_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitStatusBlock]);

// Make the block definition findable on the window object because the type has a space
window['git statusBlock'] = gitStatusBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git status'] =
  window.unixGenerator.forBlock.sequence;
