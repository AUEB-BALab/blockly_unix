var killBlock = {
  type: 'kill',
  category: 'Other Commands',
  message0: 'kill %1',
  unix_description: [
    {
      command: 'kill %PID'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'PID',
      text: 'PID' // default PID
    }
  ],
  style: 'Other Commands',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Σταματάει διεργασίες βάσει του PID τους.',
  helpUrl: 'https://linux.die.net/man/1/kill'
};

Blockly.defineBlocksWithJsonArray([killBlock]);
//
