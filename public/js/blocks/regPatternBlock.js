var regPatternBlock = {
  type: 'regPattern',
  category: 'Regular Expressions',
  message0: '%{BKY_REGPATTERN}',
  unix_description: [
    {
      printName: false,
      Pattern: (fieldValues) => {
        return fieldValues['Pattern'];
      }
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'Pattern',
      text: 'string' // default text for the input
    }
  ],
  previousStatement: null,
  nextStatement: null,
  style: 'Regular Expressions',
  tooltip: '%{BKY_REGPATTERN_TOOLTIP}',
  helpUrl: '%{BKY_REGPATTERN_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regPatternBlock]);
window.unixGenerator.forBlock['regPattern'] =
  window.unixGenerator.forBlock.concat;
