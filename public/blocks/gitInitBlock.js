var gitInitBlock = {
  type: 'git init',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      // No arguments from fields, so this function returns an empty string.
      // The command 'git init' will be printed due to printName: true and block type.
      message: () => {
        return '';
      }
    }
  ],
  message0: '%{BKY_GIT_INIT}',
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_INIT_TOOLTIP}',
  helpUrl: '%{BKY_GIT_INIT_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitInitBlock]);

// Make the block definition findable on the window object because the type has a space
window['git initBlock'] = gitInitBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git init'] =
  window.unixGenerator.forBlock.sequence;
