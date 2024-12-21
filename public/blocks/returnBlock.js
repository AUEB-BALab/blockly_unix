var returnBlock = {
  type: 'return',
  unix_description: [
    {
      printName: false,
      X: (fieldValues) => {
        return 'return ' + fieldValues['X'] + ';';
      }
    }
  ],
  message0: '%{BKY_RETURN}',
  args0: [
    {
      type: 'input_value',
      name: 'X',
      check: ['String', 'Number']
    }
  ],
  previousStatement: true,
  nextStatement: true,
  style: 'Field Processing',
  tooltip: '%{BKY_RETURN_TOOLTIP}',
  helpUrl: '%{BKY_RETURN_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([returnBlock]);
window.unixGenerator.forBlock['return'] = window.unixGenerator.forBlock.generic;
