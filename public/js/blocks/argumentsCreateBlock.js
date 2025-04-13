var argumentsCreateBlock = {
  type: 'argumentsCreate',
  unix_description: [
    {
      printName: false
    }
  ],
  category: 'Function inputs',
  message0: '%{BKY_ARGUMENTS_CREATE_WITH} %1',
  args0: [
    {
      type: 'input_statement',
      name: 'EMPTY'
    }
  ],
  output: 'String',
  style: 'Function inputs',
  helpUrl: '%{BKY_ARGUMENTS_CREATE_WITH_HELPURL}',
  tooltip: '%{BKY_ARGUMENTS_CREATE_WITH_TOOLTIP}',
  mutator: 'arguments_create_with_mutator'
};

Blockly.defineBlocksWithJsonArray([argumentsCreateBlock]);

window.unixGenerator.forBlock['argumentsCreate'] =
  window.unixGenerator.forBlock.concat;
