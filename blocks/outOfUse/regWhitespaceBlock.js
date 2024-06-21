var regWhitespaceBlock = {
  type: 'regWhitespace',
  unix_description: [
    {
      whitespace: '\\s',
      nonWhitespace: '\\S',
    },
  ],
  category: 'Regular Expressions',
  message0: 'Whitespace matching\n %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'char_match',
      options: [
        ['Match a whitespace ', 'whitespace'],
        ['Match Non whitespaces', 'nonWhitespace'],
      ],
    },
  ],
  tooltip: 'Match any whitespace or all except whitespaces',
  previousStatement: 'Action',
  nextStatement: 'Action',
  colour: 590,
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regWhitespaceBlock]);
