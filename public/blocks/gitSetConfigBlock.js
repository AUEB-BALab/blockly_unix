var gitConfigBlock = {
  type: 'git config',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      configKey: (fieldValues) => {
        return '--add --global user.' + fieldValues['configKey'];
      },
      configValue: (fieldValues) => {
        return '"' + fieldValues['configValue'] + '"';
      }
    }
  ],
  message0: '%{BKY_GIT_SET_CONFIG}',
  args0: [
    {
      type: 'field_input',
      name: 'configKey',
      text: 'name'
    },
    {
      type: 'field_input',
      name: 'configValue',
      text: 'eg. username'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_SET_CONFIG_TOOLTIP}',
  helpUrl: '%{BKY_GIT_SET_CONFIG_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitConfigBlock]);

// Make the block definition findable on the window object because the type has a space
window['git configBlock'] = gitConfigBlock;

// Register the generator
window.unixGenerator.forBlock['git config'] =
  window.unixGenerator.forBlock.sequence;
