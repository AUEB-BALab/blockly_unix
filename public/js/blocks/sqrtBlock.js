var sqrtBlock = {
  type: 'sqrt',
  unix_description: [
    {
      printName: false,
      square_root: (childCode) => {
        return 'sqrt(' + childCode + ')';
      }
    }
  ],
  message0: '%{BKY_SQUARE_ROOT}',
  args0: [
    {
      type: 'input_value',
      name: 'square_root',
      check: 'Number'
    }
  ],
  output: 'Number',
  style: 'math_blocks',
  tooltip: '%{BKY_SQUARE_ROOT_TOOLTIP}',
  helpUrl: '%{BKY_SQUARE_ROOT_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([sqrtBlock]);
window.unixGenerator.forBlock['sqrt'] = window.unixGenerator.forBlock.generic;
