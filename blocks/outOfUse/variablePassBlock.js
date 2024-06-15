var variablePassBlock = {
  type: 'variablePass',
  category: 'awk',
  message0: 'Include variable in pipeline \n %1',
  args0: [
    {
      type: 'input_value',
      name: 'varPass',
    },
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'logic_blocks',
  helpUrl: '',
  tooltip: 'Include variable in pipeline',
};

Blockly.defineBlocksWithJsonArray([variablePassBlock]);
