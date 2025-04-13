var nextBlock = {
  type: 'next',
  unix_description: [
    {
      printName: true,
      dummy: () => ';'
    }
  ],
  message0: '%{BKY_NEXT}',
  args0: [],
  previousStatement: true,
  nextStatement: true,
  style: 'Field Processing',
  tooltip: '%{BKY_NEXT_TOOLTIP}',
  helpUrl: '%{BKY_NEXT_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([nextBlock]);
window.unixGenerator.forBlock['next'] = function (block) {
  // Return a semicolon when generating the code for the block
  return 'next;\n';
};
