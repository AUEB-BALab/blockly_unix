var catBlock = {
  type: 'cat',
  category: 'File and Directory Operations',
  unix_description: [
    {
      lineNumbers: '-n',
      nonBlank_lineNumbers: '-b'
    }
  ],
  message0: '%{BKY_CAT}\n',
  message1: '%{BKY_CAT_LINE_NUMBERS} %1',
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
  style: 'File and Directory Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_CAT_TOOLTIP}',
  helpUrl: '%{BKY_CAT_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([catBlock]);
