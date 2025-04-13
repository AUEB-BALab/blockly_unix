var regRangeBlock = {
  type: 'regRange',
  category: 'Regular Expressions',
  unix_description: [
    {
      printName: false,
      reg_Range: (fieldValues) => {
        return fieldValues['not'] === 'TRUE'
          ? '[^[:' + fieldValues['reg_Range'] + ':]]'
          : '[[:' + fieldValues['reg_Range'] + ':]]';
      }
    }
  ],
  message0: '%{BKY_REGRANGE}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'reg_Range',
      options: [
        ['Uppercase letters', 'upper'],
        ['Lowercase letters', 'lower'],
        ['Letters', 'letters'],
        ['Digits', 'digit'],
        ['alphanumeric', 'alphanumeric'],
        ['punctuation', 'punctuation'],
        ['whitespace', 'whitespace'],
        ['blanks', 'blanks'],
        ['printable', 'printable'],
        ['non printable', 'non_printable'],
        ['graphical', 'graphical'],
        ['hexadecimal', 'hexadecimal'],
        ['Custom Range', 'custom']
      ]
    }
  ],
  message1: '%{BKY_REGRANGE_NOT}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'not',
      checked: false // by default it's disabled
    }
  ],
  style: 'Regular Expressions',
  previousStatement: ['String', 'Action'],
  nextStatement: 'Action',
  tooltip: '%{BKY_REGRANGE_TOOLTIP}',
  helpUrl: '%{BKY_REGRANGE_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regRangeBlock]);
window.unixGenerator.forBlock['regRange'] =
  window.unixGenerator.forBlock.concat;
