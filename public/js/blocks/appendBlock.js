var appendBlock = {
  type: 'append',
  category: 'I/O Redirection',
  message0: '%{BKY_APPEND} %1',
  unix_description: [
    {
      printName: false,
      append_filename: (fieldValues) => {
        const userInput = fieldValues['append_filename'] || '';
        return ' >> ' + userInput;
      }
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'append_filename',
      text: 'save.csv' // default file for saving
    }
  ],
  style: 'I/O Redirection',
  previousStatement: 'Action',
  tooltip: '%{BKY_APPEND_TOOLTIP}',
  helpUrl: '%{BKY_APPEND_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([appendBlock]);
window.unixGenerator.forBlock['append'] = window.unixGenerator.forBlock.concat;
