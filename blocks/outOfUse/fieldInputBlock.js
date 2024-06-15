var fieldInputBlock = {
  type: 'field_input',
  category: 'awk',
  message0: 'input %1',
  args0: [
    {
      type: 'field_input',
      name: 'field_input',
      text: 'type your search string...',
    },
  ],
  output: 'String',
  style: 'logic_blocks',
  tooltip: '%{BKY_LOGIC_NEGATE_TOOLTIP}',
  helpUrl: '%{BKY_LOGIC_NEGATE_HELPURL}',
};

Blockly.defineBlocksWithJsonArray([fieldInputBlock]);
