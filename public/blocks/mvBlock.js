var mvBlock = {
  type: 'mv',
  category: 'File and Directory Operations',
  message0: 'mv %1 %2',
  unix_description: [
    {
      command: 'mv %SOURCE %DEST'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'SOURCE',
      text: 'source' // default source
    },
    {
      type: 'field_input',
      name: 'DEST',
      text: 'dest' // default destination
    }
  ],
  style: 'File and Directory Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Μετακινεί ή μετονομάζει αρχεία.',
  helpUrl: 'https://linux.die.net/man/1/mv'
};

Blockly.defineBlocksWithJsonArray([mvBlock]);
//
