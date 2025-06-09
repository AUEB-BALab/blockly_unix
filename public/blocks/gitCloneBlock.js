var gitCloneBlock = {
  type: 'git clone',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      repoUrl: (fieldValues) => {
        return fieldValues['repoUrl'];
      }
    }
  ],
  message0: '%{BKY_GIT_CLONE}',
  args0: [
    {
      type: 'field_input',
      name: 'repoUrl',
      text: 'https://github.com/user/repo.git'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_CLONE_TOOLTIP}',
  helpUrl: '%{BKY_GIT_CLONE_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitCloneBlock]);

// Make the block definition findable on the window object because the type has a space
window['git cloneBlock'] = gitCloneBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git clone'] =
  window.unixGenerator.forBlock.sequence;
