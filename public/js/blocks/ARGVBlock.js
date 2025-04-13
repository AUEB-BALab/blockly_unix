var ARGVBlock = {
  type: 'ARGV',
  unix_description: [
    {
      printName: false,
      INDEX: (childCode) => {
        return 'ARGV[' + childCode + ']';
      }
    }
  ],
  message0: '%{BKY_ARGUMENT_ARRAY}',
  args0: [
    {
      type: 'input_value',
      name: 'INDEX',
      check: ['Number', 'String']
    }
  ],
  output: 'String',
  style: 'Special Variables',
  tooltip: '%{BKY_ARGUMENT_ARRAY_TOOLTIP}',
  helpUrl: '%{BKY_ARGUMENT_ARRAY_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([ARGVBlock]);

window.unixGenerator.forBlock['ARGV'] = window.unixGenerator.forBlock.concat;
