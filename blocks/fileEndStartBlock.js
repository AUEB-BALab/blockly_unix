var fileEndStartBlock = {
  type: 'fileEndStart',
  category: 'File inputs',
  unix_description: [
    {
      starts: 'str*',
      ends: '*str',
    },
  ],
  message0: '%{BKY_FILE_END_START_WILDCHARS} %1  %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'metric_type',
      options: [
        ['starts with', 'starts'],
        ['ends with', 'ends'],
      ],
    },
    {
      type: 'field_input',
      name: 'FILENAME',
      text: '....', // empty text for user to define filename
    },
  ],

  output: 'fileWildcard',
  style: 'File inputs',
  nextStatement: 'Action',
  tooltip: '%{BKY_FILE_END_START_WILDCHARS_TOOLTIP}',
  helpUrl: '%{BKY_FILE_END_START_WILDCHARS_HELPURL} ', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([fileEndStartBlock]);
