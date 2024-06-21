var sedBlock = {
  type: 'sed',
  category: 'Text processing',
  unix_description: [
    {
      regPattern: "'s/patt/",
      singleStr: "'s/str/",
      regReplaceText: "str/'",
      regex: '-E',
      globally: 'g',
    },
  ],
  message0: '%{BKY_SED}',
  message1: '%{BKY_SED_REGEX}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'regex',
      checked: false, // by default it's disabled
    },
  ],
  message2: '%{BKY_SED_PATTERN}',
  args2: [
    {
      type: 'input_value',
      name: 'regPattern',
      check: 'String',
    },
  ],
  message3: '%{BKY_SED_STRING}',
  args3: [
    {
      type: 'field_input',
      name: 'singleStr',
    },
  ],
  message4: '%{BKY_SED_TEXT}',
  args4: [
    {
      type: 'field_input',
      name: 'regReplaceText',
      text: 'changeText', // default text for the input
    },
  ],
  message5: '%{BKY_SED_INALL}',
  args5: [
    {
      type: 'field_checkbox',
      name: 'globally',
      checked: false, // by default it's disabled
    },
  ],

  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_SED_TOOLTIP}',
  helpUrl: '%{BKY_SED_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([sedBlock]);
