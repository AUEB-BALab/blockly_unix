var killBlock = {
  type: 'kill',
  category: 'Other Commands',
  message0: '%{BKY_KILL} %1',
  unix_description: [
    {
      printName: true,
      PID: (fieldValues) => {
        return fieldValues['PID'];
      }
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
  tooltip: '%{BKY_KILL_TOOLTIP}',
  helpUrl: '%{BKY_KILL_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([killBlock]);
window.unixGenerator.forBlock['kill'] = window.unixGenerator.forBlock.generic;
