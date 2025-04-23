var gitPullBlock = {
  type: 'git pull',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      remote: (fieldValues) => {
        return fieldValues['remote'];
      },
      branch: (fieldValues) => {
        return fieldValues['branch'];
      }
    }
  ],
  message0: '%{BKY_GIT_PULL}',
  args0: [
    {
      type: 'field_input',
      name: 'remote',
      text: 'origin'
    },
    {
      type: 'field_input',
      name: 'branch',
      text: 'main'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_PULL_TOOLTIP}',
  helpUrl: '%{BKY_GIT_PULL_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitPullBlock]);

// Make the block definition findable on the window object because the type has a space
window['git pullBlock'] = gitPullBlock;

// Register the generator for this block
window.unixGenerator.forBlock['git pull'] =
  window.unixGenerator.forBlock.sequence;
