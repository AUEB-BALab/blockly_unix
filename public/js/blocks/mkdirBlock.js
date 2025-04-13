var mkdirBlock = {
  type: 'mkdir',
  category: 'Filesystem Operations',
  unix_description: [
    {
      printName: true,
      parents: '-p'
    }
  ],
  message0: '%{BKY_MKDIR_MESSAGE}',
  message1: '%{BKY_MKDIR_CREATE_SUBDIRECTORIES}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'parents',
      checked: false // by default it's disabled
    }
  ],
  message2: '%{BKY_MKDIR_WRITE_DIRECTORY}',
  args2: [
    {
      type: 'field_input',
      name: 'directory',
      text: '............'
    }
  ],
  style: 'Filesystem Operations',
  nextStatement: 'Action',
  tooltip: '%{BKY_MKDIR_TOOLTIP}',
  helpUrl: '' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([mkdirBlock]);
window.unixGenerator.forBlock['mkdir'] = window.unixGenerator.forBlock.generic;
