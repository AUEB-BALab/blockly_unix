var logarithmBlock = {
  type: 'logarithm',
  unix_description: [
    {
      printName: false,
      log: (childCode) => {
        return 'log(' + childCode + ')';
      }
    }
  ],
  message0: '%{BKY_LOGARITHM}',
  args0: [
    {
      type: 'input_value',
      name: 'log',
      check: 'Number'
    }
  ],
  output: 'Number',
  style: 'math_blocks',
  tooltip: '%{BKY_LOGARITHM_TOOLTIP}',
  helpUrl: '%{BKY_LOGARITHM_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([logarithmBlock]);
window.unixGenerator.forBlock['logarithm'] =
  window.unixGenerator.forBlock.generic;
