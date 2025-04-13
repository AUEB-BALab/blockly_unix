var touchBlock = {
  type: 'touch',

  category: 'Filesystem Operations',
  unix_description: [
    {
      printName: true,
      argument: 'arg',
      not_create_file: '-c',
      change_time_t: (fieldValues) => {
        return '-t ' + fieldValues['change_time_t'];
      },
      change_time_d: (fieldValues) => {
        return '-d ' + fieldValues['change_time_d'];
      },
      access_time: '-a',
      modification_time: '-m'
    }
  ],
  message0: '%{BKY_TOUCH}',
  args0: [
    {
      type: 'input_value',
      name: 'argument',
      check: 'String'
    }
  ],
  message1: '%{BKY_TOUCH_NOT_CREATE_FILE}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'not_create_file',
      checked: false
    }
  ],
  message2: '%{BKY_TOUCH_CHANGE_ACCESS_TIME}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'access_time',
      checked: false
    }
  ],
  message3: '%{BKY_TOUCH_CHANGE_MODIFICATION_TIME}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'modification_time',
      checked: false
    }
  ],
  message4: '%{BKY_TOUCH_SPECIFY_TIME_D}',
  message5: '%{BKY_TOUCH_SPECIFY_TIME_FORMAT_D}',
  args5: [
    {
      type: 'field_input',
      name: 'change_time_d',
      text: new Date().toISOString().slice(0, 19).replace('T', ' '),
      check: 'String'
    }
  ],
  extensions: ['restrict_touch_to_argumentsCreate'],
  style: 'Filesystem Operations',
  tooltip: '%{BKY_TOUCH_TOOLTIP}',
  helpUrl: '%{BKY_TOUCH_HELPURL}' // URL to further information or documentation.
};
Blockly.defineBlocksWithJsonArray([touchBlock]);
window.unixGenerator.forBlock['touch'] = window.unixGenerator.forBlock.generic;
