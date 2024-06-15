var touchBlock = {
  type: 'touch',
  category: 'File and Directory Operations',
  unix_description: [{}],
  message0: '%{BKY_TOUCH}',
  style: 'File and Directory Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_TOUCH_TOOLTIP}',
  helpUrl: '%{BKY_TOUCH_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([touchBlock]);
