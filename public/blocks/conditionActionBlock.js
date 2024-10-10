var conditionActionBlock = {
  type: 'conditionAction',
  category: 'Field Processing',
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
  style: 'Field Processing',
  tooltip: '%{BKY_CONDITION_ACTION_TOOLTIP}',
  helpUrl: '%{BKY_CONDITION_ACTION_HELPURL}', // URL to further information or documentation.
  generateCommand: function (block) {
    var cond = block.getInputTargetBlock('COND');
    var condCommand = '';
    if (cond !== null) {
      condCommand = handleBlockByType(cond);
    }
    var action = block.getInputTargetBlock('DO');
    actionCommand = '';
    if (action !== null) {
      actionCommand = handleBlockByType(action);
    }
    return condCommand + ' {' + actionCommand + '}';
  }
};

Blockly.defineBlocksWithJsonArray([conditionActionBlock]);
