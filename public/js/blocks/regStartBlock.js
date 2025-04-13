var regStartBlock = {
  type: 'regStart',
  category: 'Regular Expressions',
  unix_description: [
    {
      printName: false,
      regStart: '^'
    }
  ],
  message0: '%{BKY_REGSTART}',
  style: 'Regular Expressions',
  nextStatement: 'Action',
  tooltip: '%{BKY_REGSTART_TOOLTIP}',
  helpUrl: '%{BKY_REGSTART_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regStartBlock]);
window.unixGenerator.forBlock['regStart'] =
  window.unixGenerator.forBlock.concat;
