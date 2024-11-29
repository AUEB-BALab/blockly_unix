var sortBlock = {
  type: 'sort',
  message0: '%{BKY_SORT}',
  category: 'Text Processing',
  unix_description: [
    {
      desc: '-r',
      numeric_sorting: '-n',
      sort_delimiter: (value) => "-t'" + value + "'",
      sort_column: (value) => '-k ' + value,
      uniq_elements: '-u',
      ignore_nonPrintable: '-i',
      ignore_leading_blanks: '-b'
    }
  ],
  message1: '%{BKY_SORT_DESC}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'desc',
      checked: false // by default it's disabled
    }
  ],
  message2: '%{BKY_SORT_BASED}',
  args2: [
    {
      type: 'field_dropdown',
      name: 'sort_parameter',
      options: [
        ['characters sorting', 'characters_sorting'],
        ['numeric sorting', 'numeric_sorting']
      ]
    }
  ],
  message3: '%{BKY_SORT_DELIM}',
  args3: [
    {
      type: 'field_input',
      name: 'sort_delimiter',
      text: ''
    }
  ],

  message4: '%{BKY_SORT_COLS}',
  args4: [
    {
      type: 'field_number',
      name: 'sort_column',
      value: '0', // default number of column
      //min: 1, // minimum value
      //max: 1000, // it should be the maximum of the length of the files columns
      precision: 1 // allow only integers
    }
  ],
  message5: '%{BKY_SORT_UNIQ}',
  args5: [
    {
      type: 'field_checkbox',
      name: 'uniq_elements',
      checked: false // by default it's disabled
    }
  ],
  message6: '%{BKY_SORT_IGNORE}',
  args6: [
    {
      type: 'field_checkbox',
      name: 'ignore_nonPrintable',
      checked: false // by default it's disabled
    }
  ],
  message7: '%{BKY_SORT_IGNORE_LEADING_BLANKS}',
  args7: [
    {
      type: 'field_checkbox',
      name: 'ignore_leading_blanks',
      checked: false // by default it's disabled
    }
  ],

  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_SORT_TOOLTIP}',
  helpUrl: '%{BKY_SORT_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([sortBlock]);

window.unixGenerator.forBlock['sort'] = window.unixGenerator.forBlock.generic;
