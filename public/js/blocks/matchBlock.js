var matchBlock = {
  type: 'match',
  unix_description: [
    {
      printName: false,
      X: (childCode) => {
        return 'match(' + childCode + ',';
      },
      Y: (childCode) => {
        return childCode + ')';
      }
    }
  ],
  message0: '%{BKY_MATCH}',
  args0: [
    {
      type: 'input_value',
      name: 'X',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'Y',
      check: 'String'
    }
  ],
  output: 'Number',
  style: 'String Functions',
  tooltip: '%{BKY_MATCH_TOOLTIP}',
  helpUrl: '%{BKY_MATCH_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([matchBlock]);
window.unixGenerator.forBlock['match'] = window.unixGenerator.forBlock.generic;
