var journalctlBlock = {
  type: 'journalctl',
  message0: 'journalctl %1',
  category: 'System Monitoring',
  unix_description: [
    {
      options: 'journalctl %OPTIONS'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'OPTIONS',
      text: '-xe' // default options
    }
  ],
  style: 'system_monitoring',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Προβάλει τα logs του συστήματος.',
  helpUrl: 'https://linux.die.net/man/1/journalctl'
};

Blockly.defineBlocksWithJsonArray([journalctlBlock]);
