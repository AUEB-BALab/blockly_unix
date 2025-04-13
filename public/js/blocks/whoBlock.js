var whoBlock = {
  type: 'who',
  message0: '%{BKY_WHO}',
  category: 'System Monitoring',
  unix_description: [
    {
      printName: true,
      desc: 'Display who is logged in and related information',
      show_heading: '-H',
      show_all: '-a',
      show_users: '-u',
      show_boot_time: '-b',
      show_runlevel: '-r'
    }
  ],
  message1: '%{BKY_WHO_SHOW_HEADING}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'show_heading',
      checked: false
    }
  ],
  message2: '%{BKY_WHO_SHOW_ALL}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'show_all',
      checked: false
    }
  ],
  message3: '%{BKY_WHO_SHOW_USERS}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'show_users',
      checked: false
    }
  ],
  message4: '%{BKY_WHO_SHOW_BOOT_TIME}',
  args4: [
    {
      type: 'field_checkbox',
      name: 'show_boot_time',
      checked: false
    }
  ],
  message5: '%{BKY_WHO_SHOW_RUNLEVEL}',
  args5: [
    {
      type: 'field_checkbox',
      name: 'show_runlevel',
      checked: false
    }
  ],

  style: 'System Monitoring',
  nextStatement: 'Action',
  tooltip: '%{BKY_WHO_TOOLTIP}',
  helpUrl: '%{BKY_WHO_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([whoBlock]);
window.unixGenerator.forBlock['who'] = window.unixGenerator.forBlock.generic;
