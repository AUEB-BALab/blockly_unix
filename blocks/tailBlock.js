var tailBlock = {
  type: 'tail',
  message0: '%{BKY_TAIL}',
  category: 'Text Processing',
  unix_description: [
    {
      bytes: '-c',
      lines: '-n',
      desc: '-r',
    },
  ],

  message1: '%{BKY_TAIL_METRIC}',
  args1: [
    {
      type: 'field_dropdown',
      name: 'metric_type',
      options: [
        ['lines from the end', 'lines'],
        ['bytes from the end', 'bytes'],
      ],
    },
  ],
  message2: '%{BKY_TAIL_NUMBER_OF}',
  args2: [
    {
      type: 'field_number',
      name: 'METRIC',
      value: 10, // default number of bytes
    },
  ],
  message3: '%{BKY_TAIL_DESC}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'desc',
      checked: false, // by default it's disabled
    },
  ],

  tooltip: '%{BKY_TAIL_TOOLTIP}',
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Text Processing',
  extensions: ['integer_validation'],
  helpUrl: '%{BKY_TAIL_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([tailBlock]);
