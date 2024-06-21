var NFBlock = {
  type: 'NF',
  category: 'Data Processing',
  unix_description: [
    {
      FieldNumber: 'NF',
    },
  ],
  message0: '%{BKY_FIELD_NUMBER} %1\n',
  args0: [
    {
      type: 'input_dummy',
      name: 'FieldNumber',
    },
  ],
  style: 'Data Processing',
  output: null,
  tooltip: '%{BKY_FIELD_NUMBER_TOOLTIP}',
  helpUrl: '%{BKY_FIELD_NUMBER_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([NFBlock]);
