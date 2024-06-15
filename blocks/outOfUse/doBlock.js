var doBlock = {
  type: 'do',
  category: 'awk',
  message0: 'Do %1',
  args0: [
    {
      type: 'input_statement',
      name: 'DO',
    },
  ],
  output: 'String',
  nextStatement: null,
  colour: 320,
};

Blockly.defineBlocksWithJsonArray([doBlock]);
