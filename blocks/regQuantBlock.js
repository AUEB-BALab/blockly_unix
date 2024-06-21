var regQuantBlock = {
  type: 'regQuant',
  category: 'Regular Expressions',
  unix_description: [
    {
      zeroOne: 'patt?',
      oneMore: 'patt+',
      zeroMore: 'patt*',
      anyCharExceptNewLine: '.',
    },
  ],
  message0: '%{BKY_REGQUANT}',
  message1: '%{BKY_REGQUANT_1}',
  args1: [
    {
      type: 'field_dropdown',
      name: 'reg_quant',
      options: [
        ['zero or one', 'zeroOne'],
        ['one or more', 'oneMore'],
        ['zero or more', 'zeroMore'],
        ['any char except new line', 'anyCharExceptNewLine'],
      ],
    },
  ],
  message2: '%{BKY_REGQUANT_PATTERN}',
  args2: [
    {
      type: 'input_value',
      name: 'regPattern',
      check: 'String',
    },
  ],
  style: 'Regular Expressions',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_REGQUANT_TOOLTIP}',
  extensions: ['integer_validation'],
  helpUrl: '%{BKY_REGQUANT_HELPURL}', // URL to further information or documentation.
};
Blockly.defineBlocksWithJsonArray([regQuantBlock]);
