var awkBlock = {
  type: 'awk',
  category: 'Field Processing',
  unix_description: [
    {
      printName: true,
      awkInput_delimiter: (fieldValues) => {
        return "-F '" + fieldValues['awkInput_delimiter'] + "'";
      },
      awkConditionAction: (childCode) => {
        return "' " + childCode + " '";
      }
    }
  ],
  message0: '%{BKY_AWK_TEXT_DATA_PROCESSING}',
  message1: '%{BKY_AWK_INPUT_DELIMITER} %1',
  args1: [
    {
      type: 'field_input',
      name: 'awkInput_delimiter' // Change to awk_delimiter
    }
  ],
  message2: '%{BKY_AWK_CONDITION_ACTION} %1',
  args2: [
    {
      type: 'input_statement',
      name: 'awkConditionAction'
    }
  ],
  style: 'Field Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_AWK_TOOLTIP}',
  helpUrl: '%{BKY_AWK_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([awkBlock]);
window.unixGenerator.forBlock['awk'] = window.unixGenerator.forBlock.generic;
