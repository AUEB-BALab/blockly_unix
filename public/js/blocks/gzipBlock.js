var gzipBlock = {
  type: 'gzip',
  category: 'Filesystem Operations',
  unix_description: [
    {
      printName: true,
      keep: '-k',
      decompress: '-d',
      fast: '-1',
      best: '-9',
      default: '-6',
      two: '-2',
      three: '-3',
      four: '-4',
      five: '-5',
      seven: '-7',
      eight: '-8',
      suffix: (fieldValues) => {
        return '-S ' + fieldValues['suffix'];
      }
    }
  ],
  message0: '%{BKY_GZIP_FILE}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'gzip',
      options: [
        ['Compress', 'compress'],
        ['Decompress', 'decompress']
      ]
    }
  ],
  message1: '%{BKY_GZIP_KEEP_ORIGINAL_FILE}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'keep',
      checked: true
    }
  ],
  message2: '%{BKY_GZIP_LEVEL_OF_COMPRESSION}',
  args2: [
    {
      type: 'field_dropdown',
      name: 'compress_level',
      options: [
        ['-1 (fast)', 'fast'],
        ['-2', 'two'],
        ['-3', 'three'],
        ['-4', 'four'],
        ['-5', 'five'],
        ['-6 (default)', 'default'],
        ['-7', 'seven'],
        ['-8', 'eight'],
        ['-9 (best)', 'best']
      ]
    }
  ],
  message3: '%{BKY_GZIP_CHANGE_SUFFIX} %1',
  args3: [
    {
      type: 'field_input',
      name: 'suffix',
      text: ''
    }
  ],
  style: 'Other Commands',

  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_GZIP_TOOLTIP}',
  helpUrl: ''
};

Blockly.defineBlocksWithJsonArray([gzipBlock]);
window.unixGenerator.forBlock['gzip'] = window.unixGenerator.forBlock.generic;
