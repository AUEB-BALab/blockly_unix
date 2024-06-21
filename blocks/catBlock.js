var catBlock = {
  type: 'cat',
  category: 'File and Directory Operations',
  unix_description: [
    {
      lineNumbers: '-n',
    },
  ],
  message0: '%{BKY_CAT}\n',
  message1: '%{BKY_CAT_LINE_NUMBERS} %1',
  args1: [
    {
      type: 'field_checkbox',
      name: 'lineNumbers',
      checked: false,
    },
  ],
  style: 'File and Directory Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_CAT_TOOLTIP}',
  helpUrl: '%{BKY_CAT_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([catBlock]);
