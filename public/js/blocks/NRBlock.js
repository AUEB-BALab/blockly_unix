var NRBlock = {
  type: 'NR',
  category: 'Field Processing',
  unix_description: [
    {
      printName: false,
      NR: 'NR'
    }
  ],
  message0: '%{BKY_RECORD_NUMBER}',
  style: 'Special Variables',
  output: null,
  tooltip: '%{BKY_RECORD_NUMBER_TOOLTIP}',
  helpUrl: '%{BKY_RECORD_NUMBER_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([NRBlock]);
window.unixGenerator.forBlock['NR'] = window.unixGenerator.forBlock.generic;
