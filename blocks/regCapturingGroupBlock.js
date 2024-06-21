var regCapturingGroupBlock = {
  type: 'regCapturingGroup',
  unix_description: [
    {
      regPattern: '(patt)',
    },
  ],
  category: 'Regular Expressions',
  message0: '%{BKY_REGCAPTURINGGROUP}',
  args0: [
    {
      type: 'input_value',
      name: 'regPattern',
      check: 'String',
    },
  ],
  tooltip: '%{BKY_REGCAPTURINGGROUP_TOOLTIP}',
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Regular Expressions',
  helpUrl: '%{BKY_REGCAPTURINGGROUP_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regCapturingGroupBlock]);
