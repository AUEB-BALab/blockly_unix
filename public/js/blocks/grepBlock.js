var grepBlock = {
  type: 'grep',
  category: 'Text Processing',
  unix_description: [
    {
      printName: true,
      case_ins: '-i',
      whole_word: '-w',
      count_lines: '-c',
      inverted: '-v',
      recursive: '-r',
      show_line_nums: '-n',
      stop_after_num_matches: (fieldValues) => {
        const value = fieldValues['stop_after_num_matches'];
        return value ? '-m ' + value : ''; // Only include if value exists
      },
      regPattern: (childCode) => {
        return childCode && childCode.trim() !== '' ? '-E ' + childCode : '';
      },
      showFiles: '-H',
      print_context_before_match: (fieldValues) => {
        const value = fieldValues['print_context_before_match'];
        return value ? '-B ' + value : ''; // Only include if value exists
      },
      print_context_after_match: (fieldValues) => {
        const value = fieldValues['print_context_after_match'];
        return value ? '-A ' + value : ''; // Only include if value exists
      }
    }
  ],
  message0: '%{BKY_GREP}',
  message1: '%{BKY_GREP_REGULAR_EXPRESSION_CHECK}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'regex',
      checked: false
    }
  ],
  message2: '%{BKY_GREP_CASE_INSENSITIVE}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'case_ins',
      checked: false
    }
  ],
  message3: '%{BKY_GREP_WHOLE_WORD_SEARCH}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'whole_word',
      checked: false
    }
  ],
  message4: '%{BKY_GREP_COUNT_MATCHES}',
  args4: [
    {
      type: 'field_checkbox',
      name: 'count_lines',
      checked: false
    }
  ],
  message5: '%{BKY_GREP_PATTERN_NEGATION}',
  args5: [
    {
      type: 'field_checkbox',
      name: 'inverted',
      checked: false
    }
  ],
  message6: '%{BKY_GREP_RECURSIVE_SEARCH}',
  args6: [
    {
      type: 'field_checkbox',
      name: 'recursive',
      checked: false
    }
  ],
  message7: '%{BKY_GREP_DISPLAY_LINE_NUMBERS}',
  args7: [
    {
      type: 'field_checkbox',
      name: 'show_line_nums',
      checked: false
    }
  ],
  message8: '%{BKY_GREP_STOP_AFTER_NUM_MATCHES}',
  args8: [
    {
      type: 'field_number',
      name: 'stop_after_num_matches',
      value: 0
    }
  ],
  message9: '%{BKY_GREP_MULTIPLE_PATTERN_SEARCH}',
  args9: [
    {
      type: 'field_checkbox',
      name: 'show_line_nums',
      checked: false
    }
  ],
  message10: '%{BKY_GREP_SHOW_FILENAME}',
  args10: [
    {
      type: 'field_checkbox',
      name: 'showFiles',
      checked: false
    }
  ],
  message11: '%{BKY_GREP_PATTERN_DEFINE}',
  args11: [
    {
      type: 'input_statement',
      name: 'regPattern'
    }
  ],
  message12: '%{BKY_GREP_PRINT_CONTEXT_BEFORE_MATCH}',
  args12: [
    {
      type: 'field_number',
      name: 'print_context_before_match',
      value: 0
    },
    {
      type: 'field_checkbox',
      checked: false
    }
  ],
  message13: '%{BKY_GREP_PRINT_CONTEXT_AFTER_MATCH}',
  args13: [
    {
      type: 'field_number',
      name: 'print_context_after_match',
      value: 0
    },
    {
      type: 'field_checkbox',
      checked: false
    }
  ],
  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'search in a file with a pattern',
  helpUrl: ''
};

Blockly.defineBlocksWithJsonArray([grepBlock]);
window.unixGenerator.forBlock['grep'] = window.unixGenerator.forBlock.generic;
