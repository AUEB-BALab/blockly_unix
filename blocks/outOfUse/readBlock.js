var readBlock = {
  type: 'read',
  category: 'I/O Redirection',
  unix_description: [
    {
      read: 'read str',
    },
  ],
  message0: 'User variable input %1\n',
  args0: [
    {
      type: 'field_input',
      name: 'read',
      text: '............',
    },
  ],
  colour: 876,
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Prompt action to user for input variable',
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([readBlock]);
