var whoBlock = {
  type: 'who',
  message0: '%{BKY_WHO}',
  category: 'System Monitoring',
  unix_description: [
    {
      command: 'who'
    }
  ],
  style: 'System Monitoring',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_WHO_TOOLTIP}',
  helpUrl: 'https://linux.die.net/man/1/who'
};

Blockly.defineBlocksWithJsonArray([whoBlock]);
