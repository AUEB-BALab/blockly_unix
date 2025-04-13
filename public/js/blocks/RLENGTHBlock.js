var RLENGTHBlock = {
  type: 'RLENGTH',
  category: 'Field Processing',
  unix_description: [
    {
      printName: false,
      RLENGTH: 'RLENGTH'
    }
  ],
  message0: '%{BKY_RLENGTH} %1\n',
  args0: [
    {
      type: 'input_dummy',
      name: 'FieldNumber'
    }
  ],
  style: 'Special Variables',
  output: null,
  tooltip: '%{BKY_RLENGTH_TOOLTIP}',
  helpUrl: '%{BKY_RLENGTH_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([RLENGTHBlock]);
window.unixGenerator.forBlock['RLENGTH'] =
  window.unixGenerator.forBlock.generic;
