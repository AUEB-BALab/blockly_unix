var multiplePrintBlock = {
  type: 'multiplePrint',
  unix_description: [
    {
      printName: false
    }
  ],
  category: 'Text output',
  message0: '%{BKY_PRINT_CREATE_WITH} %1',
  args0: [
    {
      type: 'input_value',
      name: 'EMPTY'
    }
  ],
  output: 'String',
  style: 'text_blocks',
  helpUrl: '%{BKY_PRINT_CREATE_WITH_HELPURL}',
  tooltip: '%{BKY_PRINT_CREATE_WITH_TOOLTIP}',
  mutator: 'new_list_create_with_mutator'
};

Blockly.defineBlocksWithJsonArray([multiplePrintBlock]);
window.unixGenerator.forBlock['multiplePrint'] =
  window.unixGenerator.forBlock.concat;
