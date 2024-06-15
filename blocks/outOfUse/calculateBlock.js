var calculateBlock = {
  type: 'calculate',
  message0: 'calculate data',
  category: 'awk',
  unix_description: [
    {
      add: '+=',
      multiply: '*=',
      var: 'var',
    },
  ],
  message1: 'variable name %1',
  args1: [
    {
      type: 'field_input',
      name: 'var',
      text: '',
    },
  ],
  message2: 'math operation %1',
  args2: [
    {
      type: 'field_dropdown',
      name: 'operation',
      options: [
        ['add', 'add'],
        ['multiply', 'multiply'],
      ],
    },
  ],
  message3: 'by column %1 \n or\n number %2',
  args3: [
    {
      type: 'input_value',
      name: 'column',
    },
    {
      type: 'field_input',
      name: 'number',
      text: '',
    },
  ],
  tooltip: 'Do math operations in awk action',
  previousStatement: 'Action',
  nextStatement: 'Action',
  colour: 250,
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([calculateBlock]);
