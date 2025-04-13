var nextFileBlock = {
  type: 'nextFile',
  unix_description: [
    {
      printName: false,
      nextFile: 'nextfile;'
    }
  ],
  message0: '%{BKY_NEXT_FILE}',
  previousStatement: true,
  nextStatement: true,
  style: 'Field Processing',
  tooltip: '%{BKY_NEXT_FILE_TOOLTIP}',
  helpUrl: '%{BKY_NEXT_FILE_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([nextFileBlock]);
window.unixGenerator.forBlock['nextFile'] =
  window.unixGenerator.forBlock.concat;
