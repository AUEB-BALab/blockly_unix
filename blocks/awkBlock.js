var awkBlock = {
  type: 'awk',
  category: 'Data Processing',
  unix_description: [
    {
      awkInput_delimiter: "-F'str' ", // Change to awk_delimiter
      awkOutput_delimiter: 'OFS"str"', // Change to awk_delimiter
      input_variable: '-v"',
      regPattern: "'{patt",
      awk_cols: "{print str}}'",
      begin: 'BEGIN',
      end: 'END',
    },
  ],
  message0: '%{BKY_AWK_TEXT_DATA_PROCESSING}',
  message1: '%{BKY_AWK_INPUT_DELIMITER} %1',
  args1: [
    {
      type: 'field_input',
      name: 'awkInput_delimiter', // Change to awk_delimiter
      text: '',
    },
  ],
  message2: '%{BKY_AWK_OUTPUT_DELIMITER} %1\n',
  args2: [
    {
      type: 'field_input',
      name: 'awkOutput_delimiter', // Change to output awk_delimiter
      text: '',
      align: 'RIGHT',
    },
  ],
  message3: '%{BKY_AWK_VARIABLE_INPUT} %1\n',
  args3: [
    {
      type: 'field_checkbox',
      name: 'input_variable',
      checked: false, // by default it's disabled
    },
  ],
  message3: '%{BKY_AWK_BEGIN} %1\n',
  args3: [
    {
      type: 'input_value',
      name: 'begin',
      check: 'String',
    },
  ],
  message4: '%{BKY_AWK_ACTION} %1\n',
  args4: [
    {
      type: 'input_value',
      name: 'regPattern',
      check: 'String',
    },
  ],
  message5: '%{BKY_AWK_BEGIN} %1\n',
  args5: [
    {
      type: 'input_value',
      name: 'end',
      check: 'String',
    },
  ],
  message6: '%{BKY_AWK_PRINT} %1',
  args6: [
    {
      type: 'input_value',
      name: 'awk_cols',
      text: '',
    },
  ],
  style: 'Data Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_AWK_TOOLTIP}',
  helpUrl: '%{BKY_AWK_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([awkBlock]);
