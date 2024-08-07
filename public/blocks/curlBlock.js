var curlBlock = {
  type: 'curl',
  message0: 'curl %1',
  category: 'Network Operations',
  unix_description: [
    {
      url: 'curl %URL'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'URL',
      text: 'http://example.com' // default URL
    }
  ],
  style: 'network_operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Μεταφέρει δεδομένα από ή προς διακομιστές.',
  helpUrl: 'https://linux.die.net/man/1/curl'
};

Blockly.defineBlocksWithJsonArray([curlBlock]);
