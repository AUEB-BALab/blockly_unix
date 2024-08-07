var dfBlock = {
  type: 'df',
  message0: '%{BKY_DF}',
  category: 'System Monitoring',
  unix_description: [
    {
      command: 'df'
    }
  ],
  style: 'System Monitoring',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_DF_TOOLTIP}',
  helpUrl: 'https://linux.die.net/man/1/df'
};

Blockly.defineBlocksWithJsonArray([dfBlock]);
