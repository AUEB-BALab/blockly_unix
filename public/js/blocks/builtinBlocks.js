window.unixGenerator.forBlock['variables_set'] = function (block) {
  var variableName = block.getFieldValue('VAR');
  var variableName = getVariableName(variableName);
  var value = block.getInputTargetBlock('VALUE');
  console.log('value before', value);
  value = window.unixGenerator.blockToCode(value);
  console.log('value after ', value);
  return `${variableName}=${value};`;
};

window.unixGenerator.forBlock['variables_get'] = function (block) {
  var variableName = block.getFieldValue('VAR');
  var variableName = getVariableName(variableName);
  return `${variableName}`;
};

window.unixGenerator.forBlock['math_change'] = function (block) {
  const variableId = block.getFieldValue('VAR');
  const variableName = getVariableName(variableId);
  var delta = block.getInputTargetBlock('DELTA');
  console.log('DELTA', delta);
  const changeBy = window.unixGenerator.blockToCode(delta);
  return `${variableName} += ${changeBy};`;
};

window.unixGenerator.forBlock['math_arithmetic'] = function (block) {
  const getOperatorSymbol = (operatorField) => {
    const operators = {
      EQ: '==',
      NEQ: '!=',
      LT: '<',
      LTE: '<=',
      GT: '>',
      GTE: '>=',
      ADD: '+',
      MINUS: '-',
      MULTIPLY: '*',
      DIVIDE: '/',
      POWER: '^',
      AND: '&&',
      OR: '||',
      NOT: '!'
    };
    return operators[operatorField];
  };
  const operator = block.getFieldValue('OP');
  const operatorSymbol = getOperatorSymbol(operator);
  const left = window.unixGenerator.blockToCode(block.getInputTargetBlock('A'));
  const right = window.unixGenerator.blockToCode(
    block.getInputTargetBlock('B')
  );
  return `${left} ${operatorSymbol} ${right}`;
};

window.unixGenerator.forBlock['math_number'] = function (block) {
  return String(block.getFieldValue('NUM'));
};

window.unixGenerator.forBlock['controls_whileUntil'] = function (block) {
  const mode = block.getFieldValue('MODE');
  const conditionBlock = block.getInputTargetBlock('BOOL');
  const conditionCode = window.unixGenerator.blockToCode(conditionBlock);
  var action = block.getInputTargetBlock('DO');
  actionCommand = '';
  if (action !== null) {
    actionCommand += window.unixGenerator.blockToCode(action) + ' ';
    action = action.getNextBlock();
  }
  if (mode === 'WHILE') {
    generatedCommand = `while (${conditionCode}) { ${actionCommand} }`;
  } else {
    generatedCommand = `do { ${actionCommand} } while (${conditionCode})`;
  }
  return generatedCommand;
};

window.unixGenerator.forBlock['controls_forEach'] = function (block) {
  const variableId = block.getFieldValue('VAR');
  const variableName = getVariableName(variableId);
  const listBlock = block.getInputTargetBlock('LIST');
  const listName = window.unixGenerator.blockToCode(listBlock);
  var action = block.getInputTargetBlock('DO');
  actionCommand = '';
  if (action !== null) {
    actionCommand += window.unixGenerator.blockToCode(action) + ' ';
    action = action.getNextBlock();
  }
  return `for(${variableName} in ${listName} ) { ${actionCommand} }`;
};

window.unixGenerator.forBlock['controls_for'] = function (block) {
  const variableId = block.getFieldValue('VAR');
  const variableName = getVariableName(variableId);
  const from = window.unixGenerator.blockToCode(
    block.getInputTargetBlock('FROM')
  );
  const to = window.unixGenerator.blockToCode(block.getInputTargetBlock('TO'));
  const by = window.unixGenerator.blockToCode(block.getInputTargetBlock('BY'));
  var action = block.getInputTargetBlock('DO');
  actionCommand = '';
  if (action !== null) {
    actionCommand += window.unixGenerator.blockToCode(action) + ' ';
  }
  return `for(${variableName}=${from}; ${variableName}<=${to}; ${variableName}+=${by}) { ${actionCommand} }`;
};

window.unixGenerator.forBlock['controls_flow_statements'] = function (block) {
  const flowStatement = block.getFieldValue('FLOW');
  switch (flowStatement) {
    case 'BREAK':
      generatedCommand = 'break;';
    case 'CONTINUE':
      generatedCommand = 'continue;';
  }
  return generatedCommand;
};

window.unixGenerator.forBlock['controls_if'] = function (block) {
  const conditionBlock = block.getInputTargetBlock('IF0');
  let blockCode = '';

  if (conditionBlock) {
    conditionCode = window.unixGenerator.blockToCode(conditionBlock);
    blockCode = `if (${conditionCode}) {`;
  }

  let actionBlock = block.getInputTargetBlock('DO0');
  while (actionBlock) {
    let actionCode = window.unixGenerator.blockToCode(actionBlock);
    blockCode += actionCode + ' ';
    actionBlock = actionBlock.getNextBlock();
  }
  blockCode += '}';

  let elseIfIndex = 1;
  let elseIfBlock = block.getInputTargetBlock(`IF${elseIfIndex}`);
  while (elseIfBlock) {
    let elseIfConditionBlock = window.unixGenerator.blockToCode(elseIfBlock);
    blockCode += ` else if (${elseIfConditionBlock}) {`;
    let elseIfActionBlock = block.getInputTargetBlock(`DO${elseIfIndex}`);
    while (elseIfActionBlock) {
      let actionCode = window.unixGenerator.blockToCode(elseIfActionBlock);
      blockCode += actionCode + ' ';
      elseIfActionBlock = elseIfActionBlock.getNextBlock();
    }
    blockCode += '}';

    elseIfIndex++;
    elseIfBlock = block.getInputTargetBlock(`IF${elseIfIndex}`);
  }

  const elseBlock = block.getInputTargetBlock('ELSE');
  if (elseBlock) {
    blockCode += ' else {';
    let elseActionBlock = elseBlock;
    while (elseActionBlock) {
      const actionCode = window.unixGenerator.blockToCode(elseActionBlock);
      blockCode += actionCode + ' ';
      elseActionBlock = elseActionBlock.getNextBlock();
    }

    blockCode += '}';
  }
  return blockCode;
};

window.unixGenerator.forBlock['text'] = function (block) {
  return '"' + block.getFieldValue('TEXT') + '"';
};

window.unixGenerator.forBlock['text_print'] = function (block) {
  const textBlock = block.getInputTargetBlock('TEXT');
  var textValue = window.unixGenerator.blockToCode(textBlock);
  textValue = textValue.match(/"([^"]*)"/g).join(', '); // Use double quotes to wrap the text
  return `print ${textValue};`;
};

const getVariableName = (variableId) => {
  const variableModel = Blockly.getMainWorkspace().getVariableById(variableId);
  return variableModel ? variableModel.name : '';
};
