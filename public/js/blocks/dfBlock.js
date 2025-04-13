var dfBlock = {
  type: 'df',
  message0: '%{BKY_DF}',
  category: 'System Commands',
  unix_description: [
    {
      printName: true,
      desc: '-h',
      show_fs_type: '-T',
      show_total_blocks: '-B',
      show_used_blocks: '-u',
      show_available_blocks: '-a',
      block_size: '-k',
      target_fs: '-t'
    }
  ],
  message1: '%{BKY_DF_SHOW_FS_TYPE}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'show_fs_type',
      checked: false
    }
  ],
  message2: '%{BKY_DF_SHOW_TOTAL_BLOCKS}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'show_total_blocks',
      checked: false
    }
  ],
  message3: '%{BKY_DF_SHOW_USED_BLOCKS}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'show_used_blocks',
      checked: false
    }
  ],
  message4: '%{BKY_DF_SHOW_AVAILABLE_BLOCKS}',
  args4: [
    {
      type: 'field_checkbox',
      name: 'show_available_blocks',
      checked: false
    }
  ],

  style: 'System Monitoring',
  nextStatement: 'Action',
  tooltip: '%{BKY_DF_TOOLTIP}',
  helpUrl: '%{BKY_DF_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([dfBlock]);
window.unixGenerator.forBlock['df'] = window.unixGenerator.forBlock.generic;
