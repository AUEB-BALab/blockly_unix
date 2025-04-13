var tarBlock = {
  type: 'tar',
  category: 'File and Directory Operations',
  message0: 'tar %1 %2',
  unix_description: [
    {
      printName: true,
      command: 'tar %OPTIONS %FILE'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'OPTIONS',
      text: 'options' // default options
    },
    {
      type: 'field_input',
      name: 'FILE',
      text: 'file' // default file
    }
  ],
  style: 'File and Directory Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Δημιουργεί και διαχειρίζεται αρχεία tar.',
  helpUrl: 'https://linux.die.net/man/1/tar'
};

Blockly.defineBlocksWithJsonArray([tarBlock]);
//
