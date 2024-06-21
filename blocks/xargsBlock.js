var xargsBlock = {
  type: 'xargs',
  category: 'Data processing',
  unix_description: [
    {
      placeholder: '-I{}',
    },
  ],
  message0: '%{BKY_XARGS}',
  message1: '%{BKY_XARGS_PLACEHOLDER}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'placeholder',
      checked: false, // by default it's disabled
    },
  ],
  style: 'Data Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_XARGS_TOOLTIP}',
  helpUrl: '%{BKY_XARGS_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([xargsBlock]);
