var headersBlock = {
  type: 'headers',
  category: 'Data Processing',
  unix_description: [
    {
      headersBegin: 'BEGIN {print "str"}',
    },
  ],
  message0: 'file headers %1\n separate with commas',
  args0: [
    {
      type: 'field_input',
      name: 'headersBegin',
      text: '',
    },
  ],
  message1: 'delimeter %1',
  args1: [
    {
      type: 'field_input',
      name: 'awkInput_delimiter',
      text: '',
    },
  ],
  colour: 450,
  nextStatement: 'Action',
  tooltip: 'put headers in the outpu results data',
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([headersBlock]);
