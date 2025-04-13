var deleteArrayElementBlock = {
  type: 'deleteArrayElement',
  unix_description: [
    {
      printName: false,
      X: (childCode) => {
        return 'delete ' + childCode + '[';
      },
      INDEX: (childCode) => {
        return childCode + '];';
      }
    }
  ],
  message0: '%{BKY_DELETE_ARRAY_ELEMENT}',
  args0: [
    {
      type: 'input_value',
      name: 'X',
      check: ['String']
    }
  ],
  message1: '%{BKY_DELETE_ARRAY_ELEMENT_INDEX}',
  args1: [
    {
      type: 'input_value',
      name: 'INDEX',
      check: ['Number', 'String']
    }
  ],
  previousStatement: true,
  nextStatement: true,
  style: 'list_blocks',
  tooltip: '%{BKY_DELETE_ARRAY_ELEMENT_TOOLTIP}',
  helpUrl: '%{BKY_DELETE_ARRAY_ELEMENT_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([deleteArrayElementBlock]);
window.unixGenerator.forBlock['deleteArrayElement'] =
  window.unixGenerator.forBlock.concat;
