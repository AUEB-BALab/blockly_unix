var cpBlock = {
  type: 'cp',
  category: 'File and Directory Operations',
  message0: 'cp %1 %2',
  unix_description: [
    {
      printName: true,
      command: 'cp %SOURCE %DEST'
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
  tooltip: 'Αντιγράφει αρχεία και καταλόγους.',
  helpUrl: 'https://linux.die.net/man/1/cp'
};

Blockly.defineBlocksWithJsonArray([cpBlock]);
//
