var sleepBlock = {
  type: 'sleep',
  message0: '%{BKY_SLEEP} %1',
  category: 'Other Commands',
  unix_description: [
    {
      time: 'sleep %TIME'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'TIME',
      text: '1' // default time in seconds
    }
  ],
  style: 'Other Commands',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_SLEEP_TOOLTIP}',
  helpUrl: 'https://linux.die.net/man/1/sleep'
};

Blockly.defineBlocksWithJsonArray([sleepBlock]);
