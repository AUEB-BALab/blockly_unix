var filenameBlock = {
  type: 'filename',
  unix_description: [
    {
      printName: false,
      FILENAME: (fieldValues) => {
        return fieldValues['FILENAME'];
      }
    }
  ],
  category: 'Function inputs',
  message0: '%{BKY_FILENAME} %1',
  args0: [
    {
      type: 'field_input',
      name: 'FILENAME',
      text: 'default.txt' // default text for the input
    }
  ],
  extensions: ['restrict_filename_to_filenamesCreate'],
  output: 'filename',
  style: 'Function inputs',
  tooltip: '%{BKY_FILENAME_TOOLTIP}',
  helpUrl: '%{BKY_FILENAME_HELPURL}' // URL to further information or documentation.
};
Blockly.defineBlocksWithJsonArray([filenameBlock]);
window.unixGenerator.forBlock['filename'] =
  window.unixGenerator.forBlock.concat;
