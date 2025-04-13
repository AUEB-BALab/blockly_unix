var regEndBlock = {
  type: 'regEnd',
  category: 'Regular Expressions',
  unix_description: [
    {
      printName: false,
      regEnd: '$'
    }
  ],
  message0: '%{BKY_REGEND}',
  style: 'Regular Expressions',
  previousStatement: 'Action',
  tooltip: '%{BKY_REGEND_TOOLTIP}',
  helpUrl: '%{BKY_REGEND_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regEndBlock]);
window.unixGenerator.forBlock['regEnd'] = window.unixGenerator.forBlock.concat;
