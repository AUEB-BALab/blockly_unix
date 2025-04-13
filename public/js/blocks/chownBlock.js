var chownBlock = {
  type: 'chown',
  category: 'File and Directory Operations',
  message0: 'chown %1 %2',
  unix_description: [
    {
      printName: true,
      command: 'chown %OWNER %FILE'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'OWNER',
      text: 'owner' // default owner
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
  tooltip: 'Αλλάζει τον ιδιοκτήτη και την ομάδα ενός αρχείου.',
  helpUrl: 'https://linux.die.net/man/1/chown'
};

Blockly.defineBlocksWithJsonArray([chownBlock]);
