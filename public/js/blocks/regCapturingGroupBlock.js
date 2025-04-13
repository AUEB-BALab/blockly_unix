var regCapturingGroupBlock = {
  type: 'regCapturingGroup',
  unix_description: [
    {
      printName: false,
      regPattern: (childCode) => {
        return !childCode ? '' : '(' + childCode + ')';
      }
    }
  ],
  category: 'Regular Expressions',
  message0: '%{BKY_REGCAPTURINGGROUP}',
  args0: [
    {
      type: 'input_statement',
      name: 'regPattern'
    }
  ],
  tooltip: '%{BKY_REGCAPTURINGGROUP_TOOLTIP}',
  previousStatement: null,
  nextStatement: null,
  style: 'Regular Expressions',
  helpUrl: '%{BKY_REGCAPTURINGGROUP_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regCapturingGroupBlock]);
window.unixGenerator.forBlock['regCapturingGroup'] =
  window.unixGenerator.forBlock.concat;
