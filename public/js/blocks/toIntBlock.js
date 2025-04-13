var intBlock = {
  type: 'int',
  unix_description: [
    {
      printName: false,
      to_int: (childCode) => {
        return 'int(' + childCode + ')';
      }
    }
  ],
  message0: '%{BKY_TO_INT}',
  args0: [
    {
      type: 'input_value',
      name: 'to_int',
      check: 'Number'
    }
  ],
  output: 'Number',
  style: 'math_blocks',
  tooltip: '%{BKY_TO_INT_TOOLTIP}',
  helpUrl: '%{BKY_TO_INT_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([intBlock]);
window.unixGenerator.forBlock['int'] = window.unixGenerator.forBlock.generic;
