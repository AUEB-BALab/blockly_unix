var hostnameBlock = {
  type: 'hostname',
  message0: '%{BKY_HOSTNAME}',
  category: 'System Monitoring',
  unix_description: [
    {
      command: 'hostname'
    }
  ],
  style: 'System Monitoring',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_HOSTNAME_TOOLTIP}',
  helpUrl: 'https://linux.die.net/man/1/hostname'
};

Blockly.defineBlocksWithJsonArray([hostnameBlock]);
