var pingBlock = {
  type: 'ping',
  message0: 'ping %1',
  category: 'Network Operations',
  unix_description: [
    {
      address: 'ping %ADDRESS'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'ADDRESS',
      text: 'example.com' // default address
    }
  ],
  style: 'network_operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip:
    'Στέλνει πακέτα ICMP echo request για να δοκιμάσει τη σύνδεση με ένα άλλο δίκτυο.',
  helpUrl: 'https://linux.die.net/man/8/ping'
};

Blockly.defineBlocksWithJsonArray([pingBlock]);
