var variableBlock = {
  type: 'variableDefine',
  category: 'awk',
  unix_description: [
    {
      var: 'var', // Change to awk_delimiter
      init: 'init', // Change to awk_delimiter
    },
  ],
  message0: 'Define variable\n',
  message1: '%1 = %2',
  args1: [
    {
      type: 'input_value',
      name: 'var',
    },
    {
      type: 'input_value',
      name: 'init',
    },
  ],
  inputsInline: true,
  output: 'String',
  nextStatement: 'Action',
  style: 'logic_blocks',
  helpUrl: '',
  tooltip: 'define a variable',
};

Blockly.defineBlocksWithJsonArray([variableBlock]);
