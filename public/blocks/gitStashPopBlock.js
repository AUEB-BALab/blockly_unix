var gitStashPopBlock = {
  type: 'git stash pop',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      // No arguments from fields, so this function returns an empty string.
      // The command 'git stash pop' will be printed due to printName: true and block type.
      message: () => {
        return '';
      }
    }
  ],
  message0: '%{BKY_GIT_STASH_POP}',
  args0: [],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_STASH_POP_TOOLTIP}',
  helpUrl: '%{BKY_GIT_STASH_POP_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitStashPopBlock]);

// Make the block definition findable on the window object because the type has a space
window['git stash popBlock'] = gitStashPopBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git stash pop'] =
  window.unixGenerator.forBlock.sequence;
