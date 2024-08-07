var rmBlock = {
  type: 'rm',
  category: 'File and Directory Operations',
  message1: 'remove %1',
  unix_description: [
    {
      command: 'rm %FILE',
      request_confirmation: '-i'
    }
  ],
  message0: '%{BKY_RM_REQUEST_CONFIRMATION}',
  args0: [
    {
      type: 'field_checkbox',
      name: 'request_confirmation',
      checked: false // by default it's disabled
    }
  ],
  args1: [
    {
      type: 'field_input',
      name: 'FILE',
      text: 'file' // default file
    }
  ],
  style: 'File and Directory Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Διαγράφει αρχεία και καταλόγους.',
  helpUrl: 'https://linux.die.net/man/1/rm'
};

Blockly.defineBlocksWithJsonArray([rmBlock]);
//
