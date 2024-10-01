var conditionActionBlock = {
  type: 'conditionAction',
  category: 'Data Processing',
  message0: '%{BKY_CONDITION_ACTION_COND} %1',
  args0: [
    {
      type: 'input_statement',
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
  style: 'Data Processing',
  tooltip: '%{BKY_CONDITION_ACTION_TOOLTIP}',
  helpUrl: '%{BKY_CONDITION_ACTION_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([conditionActionBlock]);
