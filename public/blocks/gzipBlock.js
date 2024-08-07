var gzipBlock = {
  type: 'gzip',
  category: 'File and Directory Operations',
  unix_description: [
    {
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
      suffix: '-S str',
      verbose: '-v'
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
      checked: true // by default it's disabled
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
      text: '' // empty text for user to define path
    }
  ],
  message4: '%{BKY_GZIP_VERBOSE}',
  args4: [
    {
      type: 'field_checkbox',
      name: 'verbose',
      checked: false // by default it's disabled
    }
  ],
  style: 'File and Directory Operations',
  extensions: ['integer_validation'],
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_GZIP_TOOLTIP}',
  helpUrl: '' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([gzipBlock]);
