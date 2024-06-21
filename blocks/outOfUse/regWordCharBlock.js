var regWordCharBlock = {
  type: 'regWordChar',
  unix_description: [
    {
      wordChar: '\\w',
      nonWordChar: '\\W',
    },
  ],
  category: 'Regular Expressions',
  message0: 'Word character matcthing \n %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'char_match',
      options: [
        ['Match a word char ', 'wordChar'],
        ['Match Non word chars', 'nonWordChar'],
      ],
    },
  ],
  tooltip: 'Match any word character or match all except word characters',
  previousStatement: 'Action',
  nextStatement: 'Action',
  colour: 550,
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regWordCharBlock]);
