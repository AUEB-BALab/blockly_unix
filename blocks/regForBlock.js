var regForBlock = {
  type: 'regFor',
  category: 'Regular Expressions',
  message0: '%{BKY_REGFOR}',
  unix_description: [
    {
      FROM: 'patt{n',
      TO: ',m}',
    },
  ],
  args0: [
    {
      type: 'field_number',
      name: 'FROM',
      value: 0,
    },
    {
      type: 'field_number',
      name: 'TO',
    },
    {
      type: 'field_checkbox',
      name: 'INFINITE',
      checked: false,
    },
  ],
  message1: '%{BKY_REGFOR_1}',
  args1: [
    {
      type: 'input_statement',
      name: 'DO',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  style: 'Regular Expressions',
  tooltip: '%{BKY_REGFOR_TOOLTIP}',
  helpUrl: '%{BKY_REGFOR_HELPURL}',
};

Blockly.defineBlocksWithJsonArray([regForBlock]);
