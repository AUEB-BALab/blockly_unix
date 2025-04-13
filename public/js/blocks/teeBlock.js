var teeBlock = {
  type: 'tee',
  category: 'I/O redirection',
  unix_description: [
    {
      printName: true,
      append: '-a',
      filename: (fieldValues) => {
        return fieldValues['filename'];
      }
    }
  ],
  message0: '%{BKY_TEE}',

  message1: '%{BKY_TEE_APPEND}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'append',
      checked: false // by default it's disabled
    }
  ],

  message2: '%{BKY_TEE_NAME}',
  args2: [
    {
      type: 'field_input',
      name: 'filename',
      text: '............'
    }
  ],
  style: 'I/O Redirection',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_TEE_TOOLTIP}',
  helpUrl: '%{BKY_TEE_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([teeBlock]);
window.unixGenerator.forBlock['tee'] = window.unixGenerator.forBlock.generic;
