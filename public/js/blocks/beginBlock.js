var beginBlock = {
  type: 'begin',
  category: 'Field Processing',
  unix_description: [
    {
      printName: false,
      DO: (childCode) => {
        return 'BEGIN { ' + childCode + ' }';
      }
    }
  ],
  message0: '%{BKY_BEGIN}',
  message1: '%{BKY_BEGIN_ACTION} %1',
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
  tooltip: '%{BKY_BEGIN_TOOLTIP}',
  helpUrl: '%{BKY_BEGIN_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([beginBlock]);
window.unixGenerator.forBlock['begin'] = window.unixGenerator.forBlock.generic;
