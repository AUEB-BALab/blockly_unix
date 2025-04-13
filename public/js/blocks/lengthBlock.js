var lengthBlock = {
  type: 'length',
  unix_description: [
    {
      printName: false,
      len: (childCode) => {
        return 'length(' + childCode + ')';
      }
    }
  ],
  message0: '%{BKY_LENGTH}',
  args0: [
    {
      type: 'input_value',
      name: 'len',
      check: 'String'
    }
  ],
  output: 'String',
  style: 'String Functions',
  tooltip: '%{BKY_LENGTH_TOOLTIP}',
  helpUrl: '%{BKY_LENGTH_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([lengthBlock]);
window.unixGenerator.forBlock['length'] = window.unixGenerator.forBlock.generic;
