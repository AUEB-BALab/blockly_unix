var lnBlock = {
  type: 'ln',
  category: 'File and Directory Operations',
  message0: 'ln %1 %2',
  unix_description: [
    {
      command: 'ln %TARGET %LINK'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'TARGET',
      text: 'target' // default target
    },
    {
      type: 'field_input',
      name: 'LINK',
      text: 'link' // default link
    }
  ],
  style: 'File and Directory Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Δημιουργεί συνδέσμους (links) μεταξύ αρχείων.',
  helpUrl: 'https://linux.die.net/man/1/ln'
};

Blockly.defineBlocksWithJsonArray([lnBlock]);
//
