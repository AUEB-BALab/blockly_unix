var cutBlock = {
  type: 'cut',
  category: 'Text Processing',
  unix_description: [
    {
      delimiter: "-d'str'",
      columns: "-f'str'",
      charsStart: '-c str',
      charsEnd: '-c-str',
    },
  ],
  message0: '%{BKY_CUT}\n',
  message1: 'delimiter %1\n',
  args1: [
    {
      type: 'field_input',
      name: 'delimiter',
      text: '',
    },
  ],
  message2: '%{BKY_CUT_DEFINE_COLUMNS} %1\n',
  args2: [
    {
      type: 'field_input',
      name: 'columns',
      text: '',
    },
  ],
  message3: '%{BKY_CUT_START} %1 %{BKY_CUT_END} %2',
  args3: [
    {
      type: 'field_input',
      name: 'charsStart',
      text: '',
    },
    {
      type: 'field_input',
      name: 'charsEnd',
      text: '',
    },
  ],

  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_CUT_TOOLTIP}',
  extensions: [
    'cut_validation',
    'integer_validation',
    'disallow_multiple_filenames',
  ],
  helpUrl: '%{BKY_CUT_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([cutBlock]);
