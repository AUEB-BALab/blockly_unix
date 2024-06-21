var negateBlock = {
  type: 'negate',
  category: 'awk',
  unix_description: [
    {
      negate: '!',
    },
  ],
  message0: '%{BKY_NEGATE_NOT}',
  args0: [
    {
      type: 'input_value',
      name: 'negate',
    },
  ],
  output: 'Boolean',
  style: 'logic_blocks',
  tooltip: '%{BKY_NEGATE_TOOLTIP}',
  helpUrl: '%{BKY_NEGATE_HELPURL}',
};

Blockly.defineBlocksWithJsonArray([negateBlock]);
