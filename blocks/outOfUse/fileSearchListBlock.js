var fileSearchListBlock = {
  type: 'fileSearchList',
  unix_description: [
    {
      list_contains: 'pattStart{list_contains}pattEnd',
    },
  ],
  message0: 'File contains %1\n',
  args1: [
    {
      type: 'field_input',
      name: 'list_contains',
      text: '............',
    },
  ],
  message2: 'file start %1\n file end %2',
  args2: [
    {
      type: 'field_input',
      name: 'pattStart',
      text: '............', // empty text for user to define filename
    },
    {
      type: 'field_input',
      name: 'pattEnd',
      text: '............', // empty text for user to define filename
    },
  ],

  output: 'filename',
  colour: 160,
  nextStatement: 'Action',
  tooltip:
    'Represents a wildcard for filenames. For wildcard in start or end leave relevant field empty',
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([fileSearchListBlock]);
