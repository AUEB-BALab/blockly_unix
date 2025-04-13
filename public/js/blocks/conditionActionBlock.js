var conditionActionBlock = {
  type: 'conditionAction',
  category: 'Field Processing',
  message0: '%{BKY_CONDITION_ACTION_COND} %1',
  unix_description: [
    {
      printName: false,
      COND: (childCode) => {
        return childCode;
      },
      DO: (childCode) => {
        return '{ ' + childCode + ' }';
      }
    }
  ],
  args0: [
    {
      type: 'input_value',
      name: 'COND'
    }
  ],
  message1: '%{BKY_CONDITION_ACTION_ACT} %1',
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
  tooltip: '%{BKY_CONDITION_ACTION_TOOLTIP}',
  helpUrl: '%{BKY_CONDITION_ACTION_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([conditionActionBlock]);
window.unixGenerator.forBlock['conditionAction'] =
  window.unixGenerator.forBlock.concat;
