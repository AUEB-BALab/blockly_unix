var fileContainsBlock = {
  type: 'fileContains',
  unix_description: [
    {
      contains: 'pattStart[contains]pattEnd',
    },
  ],
  message0: 'File contains %1\n',
  args1: [
    {
      type: 'field_input',
      name: 'contains',
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
  // colour: 160,
  style: 'filename_style',
  nextStatement: 'Action',
  tooltip:
    'Represents a wildcard for filenames. For wildcard in start or end leave relevant field empty',
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([fileContainsBlock]);
