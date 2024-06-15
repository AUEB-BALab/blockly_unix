var regEndBlock = {
  type: 'regEnd',
  category: 'Regular Expressions',
  unix_description: [
    {
      regPattern: 'patt$',
    },
  ],
  message0: '%{BKY_REGEND}',
  args0: [
    {
      type: 'input_value',
      name: 'regPattern',
      check: 'String',
    },
  ],
  style: 'Regular Expressions',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_REGEND_TOOLTIP}',
  helpUrl: '%{BKY_REGEND_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regEndBlock]);
