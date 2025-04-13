var hostnameBlock = {
  type: 'hostname',
  message0: '%{BKY_SYSTEM_HOSTNAME_COMMAND}',
  category: 'System Monitoring',
  unix_description: [
    {
      printName: true,
      desc: "Show or set the system's hostname",
      show_hostname: '',
      set_hostname: (fieldValues) => {
        return "-s '" + fieldValues['set_hostname'] + "'";
      },
      show_aliases: '-a',
      show_ip: '-i',
      show_fqdn: '-f'
    }
  ],
  message1: '%{BKY_HOSTNAME_SHOW_HOSTNAME}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'show_hostname',
      checked: false
    }
  ],
  message2: '%{BKY_HOSTNAME_SET_HOSTNAME}',
  args2: [
    {
      type: 'field_input',
      name: 'set_hostname',
      text: 'hostname'
    }
  ],
  message3: '%{BKY_HOSTNAME_SHOW_ALIASES}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'show_aliases',
      checked: false
    }
  ],
  message4: '%{BKY_HOSTNAME_SHOW_IP}',
  args4: [
    {
      type: 'field_checkbox',
      name: 'show_ip',
      checked: false
    }
  ],
  message5: '%{BKY_HOSTNAME_SHOW_FQDN}',
  args5: [
    {
      type: 'field_checkbox',
      name: 'show_fqdn',
      checked: false
    }
  ],

  style: 'System Monitoring',
  nextStatement: 'Action',
  tooltip: '%{BKY_HOSTNAME_TOOLTIP}',
  helpUrl: '%{BKY_HOSTNAME_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([hostnameBlock]);
window.unixGenerator.forBlock['hostname'] =
  window.unixGenerator.forBlock.generic;
