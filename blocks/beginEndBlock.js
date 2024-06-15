var beginEndBlock = {
  type: 'beginEnd',
  category: 'Data Processing',
  message0: '%{BKY_BEGIN_END}',
  message1: '%1',
  args1: [
    {
      type: 'input_statement',
      name: 'DO',
    },
  ],
  output: 'String',
  nextStatement: null,
  style: 'Data Processing',
  tooltip: '%{BKY_BEGIN_END_TOOLTIP}',
  helpUrl: '%{BKY_BEGIN_END_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([beginEndBlock]);
