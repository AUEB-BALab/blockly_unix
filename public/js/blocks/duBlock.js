var duBlock = {
  type: 'du',
  message0: '%{BKY_DU_MESSAGE}',
  category: 'System Monitoring',
  unix_description: [
    {
      printName: true,
      allFiles: '-a',
      apparentSize: '--apparent-size',
      humanReadable: '-h',
      maxDepth: '--max-depth str'
    }
  ],
  message1: '%{BKY_DU_ALL_FILES}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'allFiles',
      checked: false
    }
  ],
  message2: '%{BKY_DU_APPARENT_SIZE}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'apparentSize',
      checked: false
    }
  ],
  message3: '%{BKY_DU_HUMAN_READABLE}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'humanReadable',
      checked: false
    }
  ],
  message4: '%{BKY_DU_MAX_DEPTH}',
  args4: [
    {
      type: 'field_input',
      name: 'maxDepth',
      text: '1'
    }
  ],
  style: 'System Monitoring',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_DU_TOOLTIP}',
  helpUrl: 'https://linux.die.net/man/1/du'
};

Blockly.defineBlocksWithJsonArray([duBlock]);
