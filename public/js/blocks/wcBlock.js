var wcBlock = {
  type: 'wc',
  message0: '%{BKY_WC}',
  category: 'Text Processing',
  unix_description: [
    {
      printName: true,
      lines: '-l',
      words: '-w',
      bytes: '-c',
      chars: '-m'
    }
  ],

  message1: '%{BKY_WC_LINES}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'lines',
      checked: false // by default it's disabled
    }
  ],

  message2: '%{BKY_WC_WORDS}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'words',
      checked: false // by default it's disabled
    }
  ],

  message3: '%{BKY_WC_BYTES}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'bytes',
      checked: false // by default it's disabled
    }
  ],

  message4: '%{BKY_WC_CHARS}',
  args4: [
    {
      type: 'field_checkbox',
      name: 'chars',
      checked: false // by default it's disabled
    }
  ],

  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_WC_TOOLTIP}',
  helpUrl: '%{BKY_WC_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([wcBlock]);
window.unixGenerator.forBlock['wc'] = window.unixGenerator.forBlock.generic;
