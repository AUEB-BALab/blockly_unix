var deleteArrayBlock = {
  type: 'deleteArray',
  unix_description: [
    {
      printName: false,
      X: (childCode) => {
        return ' delete ' + childCode + ';';
      }
    }
  ],
  message0: '%{BKY_DELETE_ARRAY}',
  args0: [
    {
      type: 'input_value',
      name: 'X',
      check: ['String']
    }
  ],
  previousStatement: true,
  nextStatement: true,
  style: 'list_blocks',
  tooltip: '%{BKY_DELETE_ARRAY_TOOLTIP}',
  helpUrl: '%{BKY_DELETE_ARRAY_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([deleteArrayBlock]);
window.unixGenerator.forBlock['deleteArray'] =
  window.unixGenerator.forBlock.concat;
