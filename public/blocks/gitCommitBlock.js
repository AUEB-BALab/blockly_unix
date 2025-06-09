var gitCommitBlock = {
  type: 'git commit',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      commitMessage: (fieldValues) => {
        return '-m "' + fieldValues['commitMessage'] + '"';
      }
    }
  ],
  message0: '%{BKY_GIT_COMMIT}',
  args0: [
    {
      type: 'field_input',
      name: 'commitMessage',
      text: 'Initial commit'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_COMMIT_TOOLTIP}',
  helpUrl: '%{BKY_GIT_COMMIT_HELPURL}'
};

// Register the block with Blockly
Blockly.defineBlocksWithJsonArray([gitCommitBlock]);

// Make the block definition findable on the window object because the type has a space
window['git commitBlock'] = gitCommitBlock;

// Register the generator handler for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git commit'] =
  window.unixGenerator.forBlock.sequence;
