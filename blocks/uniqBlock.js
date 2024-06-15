var uniqBlock = {
  type: 'uniq',
  message0: '%{BKY_UNIQ}',
  category: 'Text Processing',
  unix_description: [
    {
      none: '',
      occurencies: '-c',
    },
  ],

  message1: '%{BKY_UNIQ_COUNT}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'occurencies',
      checked: false, // by default it's disabled
    },
  ],

  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_UNIQ_TOOLTIP}',
  helpUrl: '%{BKY_UNIQ_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([uniqBlock]);
