var regPatternBlock = {
  type: 'regPattern',
  category: 'Regular Expressions',
  unix_description: [
    {
      //?????????
    },
  ],
  message0: '%{BKY_REGPATTERN}',
  args0: [
    {
      type: 'field_input',
      name: 'regPattern',
      text: 'type your pattern here...', // default text for the input
    },
  ],
  output: 'String',
  style: 'Regular Expressions',
  output: 'String',
  nextStatement: 'Action',
  tooltip: '%{BKY_REGPATTERN_TOOLTIP}',
  helpUrl: '%{BKY_REGPATTERN_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regPatternBlock]);
