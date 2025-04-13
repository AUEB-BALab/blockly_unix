var unzipBlock = {
  type: 'unzip',
  category: 'File and Directory Operations',
  message0: 'unzip %1',
  unix_description: [
    {
      printName: true,
      command: 'unzip %FILE'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'FILE',
      text: 'file' // default file
    }
  ],
  style: 'File and Directory Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Αποσυμπιέζει αρχεία zip.',
  helpUrl: 'https://linux.die.net/man/1/unzip'
};

Blockly.defineBlocksWithJsonArray([unzipBlock]);
//
