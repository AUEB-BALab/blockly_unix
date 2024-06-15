var grepBlock = {
  type: 'grep',
  category: 'Data Processing',
  unix_description: [
    {
      regex: '-E',
      case_ins: '-i',
      whole_word: '-w',
      count_lines: '-c',
      inverted: '-v',
      recursive: '-r',
      show_line_nums: '-n',
      multiple_patterns: '-e',
      regPattern: '"patt"',
      showFiles: '-H',
    },
  ],
  message0: '%{BKY_GREP}',
  message1: '%{BKY_GREP_REGULAR_EXPRESSION_CHECK}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'regex',
      checked: false, // by default it's disabled
    },
  ],
  message2: '%{BKY_GREP_CASE_INSENSITIVE}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'case_ins',
      checked: false, // by default it's disabled
    },
  ],
  message3: '%{BKY_GREP_WHOLE_WORD_SEARCH}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'whole_word',
      checked: false, // by default it's disabled
    },
  ],
  message4: '%{BKY_GREP_COUNT_MATCHES}',
  args4: [
    {
      type: 'field_checkbox',
      name: 'count_lines',
      checked: false, // by default it's disabled
    },
  ],
  message5: '%{BKY_GREP_PATTERN_NEGATION}',
  args5: [
    {
      type: 'field_checkbox',
      name: 'inverted',
      checked: false, // by default it's disabled
    },
  ],
  message6: '%{BKY_GREP_RECURSIVE_SEARCH}',
  args6: [
    {
      type: 'field_checkbox',
      name: 'recursive',
      checked: false, // by default it's disabled
    },
  ],
  message7: '%{BKY_GREP_DISPLAY_LINE_NUMBERS}',
  args7: [
    {
      type: 'field_checkbox',
      name: 'show_line_nums',
      checked: false, // by default it's disabled
    },
  ],
  message8: '%{BKY_GREP_MULTIPLE_PATTERN_SEARCH}',
  args8: [
    {
      type: 'field_checkbox',
      name: 'show_line_nums',
      checked: false, // by default it's disabled
    },
  ],
  message9: '%{BKY_GREP_SHOW_FILENAME}',
  args9: [
    {
      type: 'field_checkbox',
      name: 'showFiles',
      checked: false, // by default it's disabled
    },
  ],
  message10: '%{BKY_GREP_PATTERN_DEFINE}',
  args10: [
    {
      type: 'input_value',
      name: 'regPattern',
      check: 'String',
    },
  ],
  style: 'Data Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_GREP_TOOLTIP}',
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([grepBlock]);
