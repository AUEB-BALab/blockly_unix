var catBlock = {
  type: 'cat',
  category: 'Text Processing',
  unix_description: [
    {
      printName: true,
      lineNumbers: '-n',
      nonBlank_lineNumbers: '-b',
      squeezeEmptyLines: '-s',
      end_of_line_with_dollar: '-e'
    }
  ],
  message0: '%{BKY_CAT}\n',
  message1: '%{BKY_CAT_LINE_NUMBERS} %1 \n',
  args1: [
    {
      type: 'field_dropdown',
      name: 'lineNumbers',
      options: [
        ['No Line Numbers', 'none'],
        ['Number All Lines', 'lineNumbers'],
        ['Number Non-Blank Lines Only', 'nonBlank_lineNumbers']
      ]
    }
  ],
  message2: '%{BKY_CAT_SQUEEZE_EMPTY_LINES} \n',
  args2: [
    {
      type: 'field_checkbox',
      name: 'squeezeEmptyLines',
      checked: false
    }
  ],
  message3: '%{BKY_CAT_END_OF_LINE_WITH_DOLLAR}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'end_of_line_with_dollar',
      checked: false
    }
  ],
  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_CAT_TOOLTIP}',
  helpUrl: '%{BKY_CAT_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([catBlock]);

window.unixGenerator.forBlock['cat'] = window.unixGenerator.forBlock.generic;
