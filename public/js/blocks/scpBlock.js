var scpBlock = {
  type: 'scp',
  message0: 'scp %1 %2 %3',
  category: 'Network Operations',
  unix_description: [
    {
      printName: true,
      source: 'scp %SOURCE %DESTINATION'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'SOURCE',
      text: 'source' // default source
    },
    {
      type: 'field_input',
      name: 'DESTINATION',
      text: 'destination' // default destination
    }
  ],
  style: 'network_operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Αντιγράφει αρχεία ανάμεσα σε hosts δικτύου.',
  helpUrl: 'https://linux.die.net/man/1/scp'
};

Blockly.defineBlocksWithJsonArray([scpBlock]);
