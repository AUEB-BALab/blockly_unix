var psBlock = {
  type: 'ps',
  category: 'System Monitoring',
  message0: 'ps',
  unix_description: [
    {
      command: 'ps'
    }
  ],
  args0: [],
  style: 'System Monitoring',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Εμφανίζει πληροφορίες για τις διεργασίες που εκτελούνται.',
  helpUrl: 'https://linux.die.net/man/1/ps'
};

Blockly.defineBlocksWithJsonArray([psBlock]);
//
