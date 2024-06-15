var regOutputBlock = {
  type: 'regOutput',
  category: 'Regular Expressions',
  message0: '%{BKY_REGOUTPUT}',
  message1: '%{BKY_REGOUTPUT_1}',
  args1: [
    {
      type: 'input_statement',
      name: 'DO',
    },
  ],
  output: 'String',
  nextStatement: null,
  style: 'Regular Expressions',
  tooltip: '%{BKY_REGOUTPUT_TOOLTIP}',
  helpUrl: '%{BKY_REGOUTPUT_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regOutputBlock]);
