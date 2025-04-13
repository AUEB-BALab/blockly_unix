var filenamesCreateBlock = {
  type: 'filenamesCreate',
  category: 'Function inputs',
  unix_description: [
    {
      printName: false,
      EMPTY: (childCode) => {
        return childCode;
      }
    }
  ],
  message0: '%{BKY_FILES_CREATE_WITH} %1',
  args0: [
    {
      type: 'input_dummy',
      name: 'EMPTY'
    }
  ],
  style: 'Function inputs',
  nextStatement: 'Action',
  helpUrl: '%{BKY_FILES_CREATE_WITH_HELPURL}',
  tooltip: '%{BKY_FILES_CREATE_WITH_TOOLTIP}',
  mutator: 'files_create_with_mutator'
};

Blockly.defineBlocksWithJsonArray([filenamesCreateBlock]);
window.unixGenerator.forBlock['filenamesCreate'] =
  window.unixGenerator.forBlock.concat;
