var NFBlock = {
  type: 'NF',
  category: 'Field Processing',
  unix_description: [
    {
      printName: false,
      NF: 'NF'
    }
  ],
  message0: '%{BKY_FIELD_NUMBER}',
  style: 'Special Variables',
  output: null,
  tooltip: '%{BKY_FIELD_NUMBER_TOOLTIP}',
  helpUrl: '%{BKY_FIELD_NUMBER_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([NFBlock]);
window.unixGenerator.forBlock['NF'] = window.unixGenerator.forBlock.generic;
