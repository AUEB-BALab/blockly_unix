var echoBlock = {
  type: 'echo',
  message0: '%{BKY_ECHO}',
  category: 'Text Processing',
  unix_description: [
    {
      printName: true,
      echoInput: (fieldValues) => {
        return fieldValues['echoInput'];
      }
    }
  ],
  message0: '%{BKY_ECHO} %1',
  args0: [
    {
      type: 'field_input',
      name: 'echoInput',
      text: 'Hello World!'
    }
  ],
  style: 'Text Processing',
  nextStatement: 'Action',
  tooltip: '%{BKY_ECHO_TOOLTIP}',
  helpUrl: '%{BKY_ECHO_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([echoBlock]);
window.unixGenerator.forBlock['echo'] = window.unixGenerator.forBlock.generic;
