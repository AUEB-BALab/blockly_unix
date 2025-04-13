var regForBlock = {
  type: 'regFor',
  category: 'Regular Expressions',
  message0: '%{BKY_REGFOR}',
  unix_description: [
    {
      printName: false,
      FROM: (fieldValues) => {
        return fieldValues['INFINITE'] === 'TRUE'
          ? '{' + fieldValues['FROM'] + ',}'
          : '{' + fieldValues['FROM'] + ',';
      },
      TO: (fieldValues) => {
        return fieldValues['INFINITE'] === 'TRUE'
          ? ''
          : fieldValues['TO'] + '}';
      }
    }
  ],
  args0: [
    {
      type: 'field_number',
      name: 'FROM',
      value: 0
    },
    {
      type: 'field_number',
      name: 'TO',
      value: 0
    },
    {
      type: 'field_checkbox',
      name: 'INFINITE',
      checked: false
    }
  ],
  previousStatement: null,
  nextStatement: null,
  style: 'Regular Expressions',
  tooltip: '%{BKY_REGFOR_TOOLTIP}',
  helpUrl: '%{BKY_REGFOR_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([regForBlock]);
window.unixGenerator.forBlock['regFor'] = window.unixGenerator.forBlock.concat;
