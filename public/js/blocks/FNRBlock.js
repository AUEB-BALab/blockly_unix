var FNRBlock = {
  type: 'FNR',
  category: 'Field Processing',
  unix_description: [
    {
      printName: false,
      FNR: 'FNR'
    }
  ],
  message0: '%{BKY_FNR}',
  style: 'Special Variables',
  output: null,
  tooltip: '%{BKY_FNR_TOOLTIP}',
  helpUrl: '%{BKY_FNR_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([FNRBlock]);
window.unixGenerator.forBlock['FNR'] = window.unixGenerator.forBlock.generic;
