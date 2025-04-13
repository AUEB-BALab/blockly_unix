var dateBlock = {
  type: 'date',
  message0: '%{BKY_SYSTEM_DATE_COMMAND}',
  category: 'System Monitoring',
  unix_description: [
    {
      printName: true,
      desc: 'Display or set the system date and time',
      utc_time: '-u'
    }
  ],
  message1: '%{BKY_DATE_UTC_TIME}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'utc_time',
      checked: false
    }
  ],

  style: 'System Monitoring',
  nextStatement: 'Action',
  tooltip: '%{BKY_DATE_TOOLTIP}',
  helpUrl: '%{BKY_DATE_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([dateBlock]);
window.unixGenerator.forBlock['date'] = window.unixGenerator.forBlock.generic;
