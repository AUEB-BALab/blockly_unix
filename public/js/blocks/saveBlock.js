var saveBlock = {
  type: 'save',
  message0: '%{BKY_SAVE}',
  category: 'I/O Redirection',
  unix_description: [
    {
      printName: false,
      save_filename: (fieldValues) => {
        return ' > ' + fieldValues['save_filename'];
      }
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'save_filename',
      text: 'save.csv' // default file for saving
    }
  ],
  style: 'I/O Redirection',
  previousStatement: 'Action',
  tooltip: '%{BKY_SAVE_TOOLTIP}',
  helpUrl: '%{BKY_SAVE_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([saveBlock]);
window.unixGenerator.forBlock['save'] = window.unixGenerator.forBlock.concat;
