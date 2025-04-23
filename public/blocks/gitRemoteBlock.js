// Register the block for git remote -v
var gitRemoteVerboseBlock = {
  type: 'git remote -v',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      message: () => {
        return '';
      }
    }
  ],
  message0: '%{BKY_GIT_REMOTE}',
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_REMOTE_TOOLTIP}',
  helpUrl: '%{BKY_GIT_REMOTE_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitRemoteVerboseBlock]);

// Make the block definition findable on the window object because the type has a space
window['git remote -vBlock'] = gitRemoteVerboseBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git remote -v'] =
  window.unixGenerator.forBlock.sequence;
