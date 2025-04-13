var lsBlock = {
  type: 'ls',
  message0: '%{BKY_LS_MESSAGE}',
  category: 'Filesystem Operations',
  unix_description: [
    {
      printName: true,
      detailed: '-l',
      recursively: '-R',
      hidden: '-a',
      reverse: '-r'
    }
  ],

  message1: '%{BKY_LS_SHOW_DETAILS}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'detailed',
      checked: false // by default it's disabled
    }
  ],
  message2: '%{BKY_LS_SUBDIRECTORIES}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'recursively',
      checked: false // by default it's disabled
    }
  ],
  message3: '%{BKY_LS_HIDDEN}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'hidden',
      checked: false // by default it's disabled
    }
  ],
  message4: '%{BKY_LS_REVERSE_ORDER}',
  args4: [
    {
      type: 'field_checkbox',
      name: 'reverse',
      checked: false // by default it's disabled
    }
  ],
  style: 'Filesystem Operations',
  nextStatement: 'Action',
  tooltip: '%{BKY_LS_TOOLTIP}',
  helpUrl: '' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([lsBlock]);
window.unixGenerator.forBlock['ls'] = window.unixGenerator.forBlock.generic;
