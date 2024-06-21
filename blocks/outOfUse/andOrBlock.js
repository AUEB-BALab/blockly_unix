var andOrBlock = {
  // type: "and",
  // category: "File and Directory Operations",
  // unix_description: [
  //   {
  //     and: "&&"
  //   }
  // ],
  // message0: "AND",

  // colour: 250,
  // previousStatement: "Action",
  // nextStatement: "Action",
  // tooltip: "AND condition",
  // helpUrl: "" // URL to further information or documentation.
  type: 'andOr',
  category: 'awk',
  unix_description: [
    {
      or: '||',
      and: '&&',
    },
  ],
  message0: '%1 %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'A',
      check: 'Boolean',
    },
    {
      type: 'field_dropdown',
      name: 'OP',
      options: [
        ['and', 'AND'],
        ['or', 'OR'],
      ],
    },
    {
      type: 'input_value',
      name: 'B',
      check: 'Boolean',
    },
  ],
  inputsInline: true,
  output: 'Boolean',
  style: 'logic_blocks',
  helpUrl: '%{BKY_LOGIC_OPERATION_HELPURL}',
  extensions: ['logic_op_tooltip'],
};

Blockly.defineBlocksWithJsonArray([andOrBlock]);
