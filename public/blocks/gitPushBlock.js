var gitPushBlock = {
  type: 'git push',
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
  message0: '%{BKY_GIT_PUSH}',
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
  tooltip: '%{BKY_GIT_PUSH_TOOLTIP}',
  helpUrl: '%{BKY_GIT_PUSH_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitPushBlock]);

// Make the block definition findable on the window object because the type has a space
window['git pushBlock'] = gitPushBlock;

// Generator function
window.unixGenerator.forBlock['git push'] =
  window.unixGenerator.forBlock.sequence;
