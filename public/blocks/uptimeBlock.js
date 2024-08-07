var uptimeBlock = {
  type: 'uptime',
  message0: '%{BKY_UPTIME}',
  category: 'System Monitoring',
  unix_description: [
    {
      command: 'uptime'
    }
  ],
  style: 'System Monitoring',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_UPTIME_TOOLTIP}',
  helpUrl: 'https://linux.die.net/man/1/uptime'
};

Blockly.defineBlocksWithJsonArray([uptimeBlock]);
