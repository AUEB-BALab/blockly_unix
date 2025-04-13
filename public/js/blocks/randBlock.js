var randomBlock = {
  type: 'random',
  unix_description: [
    {
      printName: false,
      random: 'rand()'
    }
  ],
  message0: '%{BKY_RANDOM}',
  output: 'Number',
  style: 'math_blocks',
  tooltip: '%{BKY_RANDOM_TOOLTIP}',
  helpUrl: '%{BKY_RANDOM_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([randomBlock]);
window.unixGenerator.forBlock['random'] = window.unixGenerator.forBlock.generic;
