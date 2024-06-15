var regDigitBlock = {
  type: 'regDigit',
  unix_description: [
    {
      digit: '\\d',
      nonDigit: '\\D',
    },
  ],
  category: 'Regular Expressions',
  message0: 'Digit matching \n %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'digit_match',
      options: [
        ['Match a digit ', 'digit'],
        ['Match Non digit', 'nonDigit'],
      ],
    },
  ],
  tooltip: 'Match any digit or match all except a digit',
  previousStatement: 'Action',
  nextStatement: 'Action',
  colour: 510,
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regDigitBlock]);
