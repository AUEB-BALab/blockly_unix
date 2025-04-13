var sineBlock = {
  type: 'sine',
  unix_description: [
    {
      printName: false,
      sin: (childCode) => {
        return 'sin(' + childCode + ')';
      }
    }
  ],
  message0: '%{BKY_SINE}',
  args0: [
    {
      type: 'input_value',
      name: 'sin',
      check: 'Number'
    }
  ],
  output: 'Number',
  style: 'math_blocks',
  tooltip: '%{BKY_SINE_TOOLTIP}',
  helpUrl: '%{BKY_SINE_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([sineBlock]);
window.unixGenerator.forBlock['sine'] = window.unixGenerator.forBlock.generic;
