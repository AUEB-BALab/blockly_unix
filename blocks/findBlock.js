var findBlock = {
  type: 'find',
  category: 'File and Directory Operations',
  unix_description: [
    {
      path: 'str',
      mtime: '-mtime -',
      mmin: '-mmin -',
      atime: '-atime -',
      amin: '-amin -',
      ctime: '-ctime -',
      cmin: '-cmin -',
      sizeLarger: '-size +',
      sizesmaller: '-size -',
      reverse: '-r',
      Kbs: 'K',
      Mbs: 'M',
      Gbs: 'G',
      current: '.',
      parent: '..',
      grandparent: '../..',
      subdirs: '-maxdepth 1',
      file: '-type f',
      directory: '-type d',
      both: '',
    },
  ],

  message0: '%{BKY_FIND} \n',
  message1: '%{BKY_FIND_DIRECTORY_SEARCH} ',
  args1: [
    {
      type: 'field_dropdown',
      name: 'dir',
      options: [
        ['choose', 'choose'],
        ['current', 'current'],
        ['parent', 'parent'],
        ['grandparent', 'grandparent'],
      ],
    },
  ],
  message2: '%{BKY_FIND_CHOOSE_TYPE} ',
  args2: [
    {
      type: 'field_dropdown',
      name: 'type',
      options: [
        ['files', 'file'],
        ['directories', 'directory'],
        ['both', 'both'],
      ],
    },
  ],
  message3: '%{BKY_FIND_SUBDIRECTORIES}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'subdirs',
      checked: true, // by default it's enabled
    },
  ],
  message4: '%{BKY_FIND_DIRECTORY_DEFINE}',
  args4: [
    {
      type: 'field_input',
      name: 'path',
      text: '',
    },
  ],
  message5: '%{BKY_FIND_MODIFIED}',
  args5: [
    {
      type: 'field_dropdown',
      name: 'modified',
      options: [
        ['choose', 'choose'],
        ['days', 'mtime'],
        ['minutes', 'mmin'],
      ],
    },
    {
      type: 'field_input',
      name: 'mnumber',
      text: '',
    },
  ],
  message6: '%{BKY_FIND_ACCESSED}',
  args6: [
    {
      type: 'field_dropdown',
      name: 'accessed',
      options: [
        ['choose', 'choose'],
        ['days', 'atime'],
        ['minutes', 'amin'],
      ],
    },
    {
      type: 'field_input',
      name: 'anumber',
      text: '',
    },
  ],
  message7: '%{BKY_FIND_METADATA}',
  args7: [
    {
      type: 'field_dropdown',
      name: 'changed',
      options: [
        ['choose', 'choose'],
        ['days', 'ctime'],
        ['minutes', 'cmin'],
      ],
    },
    {
      type: 'field_input',
      name: 'cnumber',
      text: '',
    },
  ],
  message8: '%{BKY_FIND_SIZE}',
  args8: [
    {
      type: 'field_dropdown',
      name: 'size',
      options: [
        ['choose', 'choose'],
        ['more than', 'sizeLarger'],
        ['less than', 'sizesmaller'],
      ],
    },
    {
      type: 'field_number',
      name: 'METRIC',
      value: 0,
    },
    {
      type: 'field_dropdown',
      name: 'bytesMetric',
      options: [
        ['choose', 'choose'],
        ['Kbs', 'Kbs'],
        ['Mbs', 'Mbs'],
        ['Gbs', 'Gbs'],
      ],
    },
  ],
  message9: '%{BKY_FIND_NAME_DEFINE}',
  args9: [
    {
      type: 'input_value',
      name: 'fileEndStart',
      check: 'fileWildcard',
    },
  ],
  message10: '%{BKY_FIND_EXECUTE_COMMAND}',
  args10: [
    {
      type: 'field_checkbox',
      name: 'exec',
      checked: false, // by default it's disabled
    },
  ],

  style: 'File and Directory Operations',
  nextStatement: 'Action',
  tooltip: 'Find files in directories and subdirectories',
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([findBlock]);
