var findBlock = {
  type: 'find',
  category: 'Filesystem Operations',
  unix_description: [
    {
      printName: true,
      path: (fieldValues) => {
        return fieldValues['path'];
      },
      mtime: (fieldValues) => {
        return '-mtime ' + fieldValues['mtime'];
      },
      mmin: (fieldValues) => {
        return '-mmin ' + fieldValues['mmin'];
      },
      atime: (fieldValues) => {
        return '-atime ' + fieldValues['atime'];
      },
      amin: (fieldValues) => {
        return '-amin ' + fieldValues['amin'];
      },
      ctime: (fieldValues) => {
        return '-ctime ' + fieldValues['ctime'];
      },
      cmin: (fieldValues) => {
        return '-cmin ' + fieldValues['cmin'];
      },
      sizeLarger: (fieldValues) => {
        return '-size +' + fieldValues['sizeLarger'];
      },
      sizesmaller: (fieldValues) => {
        return '-size -' + fieldValues['sizesmaller'];
      },
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
      Pattern: (fieldValues) => {
        return '-regex "' + fieldValues['Pattern'] + '"';
      },
      both: ''
    }
  ],

  message0: '%{BKY_FIND}',
  message1: '%{BKY_FIND_DIRECTORY_SEARCH} ',
  args1: [
    {
      type: 'field_dropdown',
      name: 'dir',
      options: [
        ['choose', 'choose'],
        ['current', 'current'],
        ['parent', 'parent'],
        ['grandparent', 'grandparent']
      ]
    }
  ],
  message2: '%{BKY_FIND_CHOOSE_TYPE} ',
  args2: [
    {
      type: 'field_dropdown',
      name: 'type',
      options: [
        ['files', 'file'],
        ['directories', 'directory'],
        ['both', 'both']
      ]
    }
  ],
  message3: '%{BKY_FIND_SUBDIRECTORIES}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'subdirs',
      checked: true // by default it's enabled
    }
  ],
  message4: '%{BKY_FIND_DIRECTORY_DEFINE}',
  args4: [
    {
      type: 'field_input',
      name: 'path',
      text: ''
    }
  ],
  message5: '%{BKY_FIND_MODIFIED}',
  args5: [
    {
      type: 'field_dropdown',
      name: 'modified',
      options: [
        ['choose', 'choose'],
        ['days', 'mtime'],
        ['minutes', 'mmin']
      ]
    },
    {
      type: 'field_input',
      name: 'mnumber',
      text: ''
    }
  ],
  message6: '%{BKY_FIND_ACCESSED}',
  args6: [
    {
      type: 'field_dropdown',
      name: 'accessed',
      options: [
        ['choose', 'choose'],
        ['days', 'atime'],
        ['minutes', 'amin']
      ]
    },
    {
      type: 'field_input',
      name: 'anumber',
      text: ''
    }
  ],
  message7: '%{BKY_FIND_METADATA}',
  args7: [
    {
      type: 'field_dropdown',
      name: 'changed',
      options: [
        ['choose', 'choose'],
        ['days', 'ctime'],
        ['minutes', 'cmin']
      ]
    },
    {
      type: 'field_input',
      name: 'cnumber',
      text: ''
    }
  ],
  message8: '%{BKY_FIND_SIZE}',
  args8: [
    {
      type: 'field_dropdown',
      name: 'size',
      options: [
        ['choose', 'choose'],
        ['more than', 'sizeLarger'],
        ['less than', 'sizesmaller']
      ]
    },
    {
      type: 'field_number',
      name: 'METRIC',
      value: 0
    },
    {
      type: 'field_dropdown',
      name: 'bytesMetric',
      options: [
        ['choose', 'choose'],
        ['Kbs', 'Kbs'],
        ['Mbs', 'Mbs'],
        ['Gbs', 'Gbs']
      ]
    }
  ],
  message9: '%{BKY_FIND_NAME_DEFINE}',
  args9: [
    {
      type: 'input_statement',
      name: 'Pattern',
      check: 'String'
    }
  ],
  message10: '%{BKY_FIND_EXECUTE_COMMAND}',
  args10: [
    {
      type: 'field_checkbox',
      name: 'exec',
      checked: false // by default it's disabled
    }
  ],

  style: 'Filesystem Operations',
  nextStatement: true,
  tooltip: 'Find files in directories and subdirectories',
  helpUrl: '' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([findBlock]);
