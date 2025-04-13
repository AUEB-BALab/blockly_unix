var regBackreferenceBlock = {
  type: 'regBackreference',
  category: 'Regular Expressions',
  unix_description: [
    {
      printName: false,
      1: '\\1',
      2: '\\2',
      3: '\\3',
      4: '\\4',
      5: '\\5',
      6: '\\6',
      7: '\\7',
      8: '\\8',
      9: '\\9'
    }
  ],
  message0: '%{BKY_REGBACKREFERENCE}',
  args0: [
    {
      type: 'field_dropdown', // Dropdown για επιλογή του αριθμού αναφοράς
      name: 'BACKREF_NUMBER',
      options: [
        ['1', '1'],
        ['2', '2'],
        ['3', '3'],
        ['4', '4'],
        ['5', '5'],
        ['6', '6'],
        ['7', '7'],
        ['8', '8'],
        ['9', '9']
      ]
    }
  ],
  style: 'Regular Expressions',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_REGBACKREFERENCE_TOOLTIP}',
  helpUrl: '%{BKY_REGBACKREFERENCE_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([regBackreferenceBlock]);
window.unixGenerator.forBlock['regBackreference'] =
  window.unixGenerator.forBlock.concat;
