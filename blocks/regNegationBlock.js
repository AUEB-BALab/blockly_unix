var regNegationBlock = {
  type: 'regNegation',
  category: 'Regular Expressions',
  unix_description: [
    {
      regPattern: '[^patt]',
    },
  ],
  message0: '%{BKY_REGNEGATION}',
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
  tooltip: '%{BKY_REGNEGATION_TOOLTIP}',
  helpUrl: '%{BKY_REGNEGATION_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regNegationBlock]);
