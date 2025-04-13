var condOutputBlock = {
  type: 'condOutput',
  category: 'Field Processing',
  message0: '%{BKY_CONDITION_OUTPUT}',
  message1: '%1',
  args1: [
    {
      type: 'input_statement',
      name: 'DO'
    }
  ],
  output: 'String',
  nextStatement: null,
  style: 'Field Processing',
  tooltip: '%{BKY_CONDITION_OUTPUT_TOOLTIP}',
  helpUrl: '%{BKY_CONDITION_OUTPUT_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([condOutputBlock]);
