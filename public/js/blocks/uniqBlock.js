var uniqBlock = {
  type: 'uniq',
  message0: '%{BKY_UNIQ}',
  category: 'Text Processing',
  unix_description: [
    {
      printName: true,
      none: '',
      occurencies: '-c',
      caseInsensitive: '-i',
      outputNonRepeatedLines: '-u',
      outputSingleCopyOfRepeatedLines: '-d',
      skipChars: (fieldValues) => {
        return '-s ' + fieldValues['skipChars'];
      }
    }
  ],

  message1: '%{BKY_UNIQ_COUNT}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'occurencies',
      checked: false // by default it's disabled
    }
  ],
  message2: '%{BKY_UNIQ_CASE}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'caseInsensitive',
      checked: false // by default it's disabled
    }
  ],
  message3: '%{BKY_UNIQ_OUTPUT_NON_REPEATED_LINES}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'outputNonRepeatedLines',
      checked: false // by default it's disabled
    }
  ],
  message4: '%{BKY_UNIQ_OUTPUT_SINGLE_COPY_OF_REPEATED_LINES}',
  args4: [
    {
      type: 'field_checkbox',
      name: 'outputSingleCopyOfRepeatedLines',
      checked: false // by default it's disabled
    }
  ],
  message5: '%{BKY_UNIQ_SKIP_CHARS}',
  args5: [
    {
      type: 'field_input',
      name: 'skipChars',
      text: ''
    }
  ],
  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_UNIQ_TOOLTIP}',
  helpUrl: '%{BKY_UNIQ_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([uniqBlock]);

window.unixGenerator.forBlock['uniq'] = window.unixGenerator.forBlock.generic;
