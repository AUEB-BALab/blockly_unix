var columnBlock = {
  type: 'column',
  category: 'Field Processing',
  unix_description: [
    {
      printName: false,
      TEXT: (fieldValues) => {
        return '$' + fieldValues['TEXT'];
      }
    }
  ],
  message0: '%{BKY_COLUMN} %1',
  args0: [
    {
      type: 'field_input',
      name: 'TEXT'
    }
  ],
  output: null,
  style: 'Field Processing',
  tooltip: '%{BKY_COLUMN_TOOLTIP}',
  helpUrl: '%{BKY_COLUMN_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([columnBlock]);
window.unixGenerator.forBlock['column'] = window.unixGenerator.forBlock.generic;
