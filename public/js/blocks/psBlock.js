var psBlock = {
  type: 'ps',
  message0: '%{BKY_PS}',
  category: 'System Commands',
  unix_description: [
    {
      printName: true,
      desc: '-e',
      show_all_processes: '-e',
      show_process_user: (fieldValues) => {
        return "-u '" + fieldValues['show_process_user'] + "'";
      },
      show_process_pid: (fieldValues) => {
        return "-p '" + fieldValues['show_process_pid'] + "'";
      },
      format: (fieldValues) => {
        return "-o '" + fieldValues['format'] + "'";
      },
      show_thread: '-L',
      sort_by: '--sort',
      filter_by: '--pid'
    }
  ],
  message1: '%{BKY_PS_SHOW_ALL}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'show_all_processes',
      checked: false // by default it's disabled
    }
  ],
  message2: '%{BKY_PS_SHOW_USER}',
  args2: [
    {
      type: 'field_input',
      name: 'show_process_user',
      text: 'user'
    }
  ],
  message3: '%{BKY_PS_SHOW_PID}',
  args3: [
    {
      type: 'field_input',
      name: 'show_process_pid',
      text: 'pid'
    }
  ],
  message4: '%{BKY_PS_FORMAT}',
  args4: [
    {
      type: 'field_input',
      name: 'format',
      text: 'format'
    }
  ],
  message5: '%{BKY_PS_SHOW_THREAD}',
  args5: [
    {
      type: 'field_checkbox',
      name: 'show_thread',
      checked: false // by default it's disabled
    }
  ],
  style: 'System Monitoring',
  nextStatement: 'Action',
  tooltip: '%{BKY_PS_TOOLTIP}',
  helpUrl: '%{BKY_PS_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([psBlock]);
window.unixGenerator.forBlock['ps'] = window.unixGenerator.forBlock.generic;
