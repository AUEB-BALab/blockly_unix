var chmodBlock = {
  type: 'chmod',
  category: 'File and Directory Operations',
  message0: 'chmod %1 %2',
  unix_description: [
    {
      printName: true,
      command: 'chmod %MODE %FILE'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'MODE',
      text: 'mode' // default mode
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
  tooltip: 'Αλλάζει τα δικαιώματα πρόσβασης αρχείων.',
  helpUrl: 'https://linux.die.net/man/1/chmod'
};

Blockly.defineBlocksWithJsonArray([chmodBlock]);
