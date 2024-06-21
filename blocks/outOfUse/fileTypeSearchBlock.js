var fileTypeSearchBlock = {
  type: 'fileTypeSearch',
  category: 'File and Directory Operations',
  unix_description: [
    {
      fileTypeSearch: '*.str',
    },
  ],
  message0: 'search files of type %1',
  args0: [
    {
      type: 'field_input',
      name: 'fileTypeSearch',
      text: 'csv', // default text for the input
    },
  ],
  tooltip: 'search in the directory files of chosen type',
  previousStatement: 'Action',
  nextStatement: 'Action',
  colour: 340,
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([fileTypeSearchBlock]);
