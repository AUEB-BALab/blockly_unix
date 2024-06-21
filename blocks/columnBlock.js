var columnBlock = {
  type: 'column',
  category: 'Data Processing',
  unix_description: [
    {
      TEXT: '$str',
    },
  ],
  message0: '%{BKY_COLUMN} %1',
  args0: [
    {
      type: 'field_input',
      name: 'TEXT',
    },
  ],
  output: null,
  style: 'Data Processing',
  tooltip: '%{BKY_COLUMN_TOOLTIP}',
  helpUrl: '%{BKY_COLUMN_HELPURL}',
};

Blockly.defineBlocksWithJsonArray([columnBlock]);
