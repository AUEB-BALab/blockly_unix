var FILENAMEBlock = {
  type: 'FILENAME',
  category: 'Field Processing',
  unix_description: [
    {
      printName: true
    }
  ],
  message0: '%{BKY_FILENAME_VARIABLE}',
  style: 'Special Variables',
  output: null,
  tooltip: '%{BKY_FILENAME_TOOLTIP}',
  helpUrl: '%{BKY_FILENAME_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([FILENAMEBlock]);
window.unixGenerator.forBlock['FILENAME'] =
  window.unixGenerator.forBlock.generic;
