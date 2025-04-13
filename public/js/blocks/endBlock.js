var endBlock = {
  type: 'end',
  category: 'Field Processing',
  unix_description: [
    {
      printName: false,
      DO: (childCode) => {
        return 'END { ' + childCode + ' }';
      }
    }
  ],
  message0: '%{BKY_END}',
  message1: '%{BKY_END_ACTION} %1',
  args1: [
    {
      type: 'input_statement',
      name: 'DO'
    }
  ],
  previousStatement: true,
  nextStatement: true,
  nextStatement: null,
  style: 'Field Processing',
  tooltip: '%{BKY_END_TOOLTIP}',
  helpUrl: '%{BKY_END_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([endBlock]);
window.unixGenerator.forBlock['end'] = window.unixGenerator.forBlock.generic;
