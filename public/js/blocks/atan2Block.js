var atan2Block = {
  type: 'atan2',
  unix_description: [
    {
      printName: false,
      Y: (childCode) => {
        return 'atan2(' + childCode + ',';
      },
      X: (childCode) => {
        return childCode + ')';
      }
    }
  ],
  message0: '%{BKY_ATAN2}',
  args0: [
    {
      type: 'input_value',
      name: 'Y',
      check: 'Number'
    },
    {
      type: 'input_value',
      name: 'X',
      check: 'Number'
    }
  ],
  output: 'Number',
  style: 'math_blocks',
  tooltip: '%{BKY_ATAN2_TOOLTIP}',
  helpUrl: '%{BKY_ATAN2_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([atan2Block]);
window.unixGenerator.forBlock['atan2'] = window.unixGenerator.forBlock.generic;
