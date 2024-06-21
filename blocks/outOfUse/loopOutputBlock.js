var loopOutputBlock = {
  type: 'loopOutput',
  category: 'awk',
  message0: 'Put loop',
  message1: '%1',
  args1: [
    {
      type: 'input_statement',
      name: 'DO',
    },
  ],
  output: 'String',
  nextStatement: null,
  colour: 510,
};

Blockly.defineBlocksWithJsonArray([loopOutputBlock]);
