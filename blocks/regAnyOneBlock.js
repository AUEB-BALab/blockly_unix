var regAnyOneBlock = {
  type: 'regAnyOne',
  unix_description: [
    {
      regPattern: '[patt]',
      notMatch: 'patt^',
    },
  ],
  category: 'Regular Expressions',
  message0: '%{BKY_REGANYONE}',
  args0: [
    {
      type: 'input_value',
      name: 'regPattern',
      check: 'String',
    },
  ],
  message1: '%{BKY_REGANYONE_NOT}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'notMatch',
      checked: false,
    },
  ],
  tooltip: '%{BKY_REGANYONE_TOOLTIP}',
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Regular Expressions',
  helpUrl: '%{BKY_REGANYONE_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regAnyOneBlock]);
