var dateBlock = {
  type: 'date',
  message0: '%{BKY_DATE}',
  category: 'System Monitoring',
  unix_description: [
    {
      command: 'date'
    }
  ],
  style: 'System Monitoring',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_DATE_TOOLTIP}',
  helpUrl: 'https://linux.die.net/man/1/date'
};

Blockly.defineBlocksWithJsonArray([dateBlock]);
