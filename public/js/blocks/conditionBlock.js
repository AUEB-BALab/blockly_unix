var conditionBlock = {
  type: 'condition',
  category: 'Field Processing',
  unix_description: [
    {
      printName: false,
      left_part: (fieldValues, childCode) => {
        return childCode + ' ' + fieldValues['operator'];
      },
      right_part: (childCode) => {
        return childCode;
      }
    }
  ],
  message0: '%1', // First message line for left_part
  args0: [
    {
      type: 'input_value',
      name: 'left_part',
      check: ['String', 'Number', 'Boolean'] // Allow both String and Number types
    }
  ],
  message1: '%1', // Second message line for operator
  args1: [
    {
      type: 'field_dropdown',
      name: 'operator',
      options: [
        ['==', '=='],
        ['!=', '!='],
        ['<', '<'],
        ['<=', '<='],
        ['>', '>'],
        ['>=', '>='],
        ['&& (AND)', '&&'],
        ['|| (OR)', '||'],
        ['! (NOT)', '!']
      ]
    }
  ],
  message2: '%1', // Third message line for right_part
  args2: [
    {
      type: 'input_value',
      name: 'right_part',
      check: ['String', 'Number', 'Boolean'] // Allow both String and Number types
    }
  ],
  style: 'Field Processing',
  output: null
};

Blockly.defineBlocksWithJsonArray([conditionBlock]);
window.unixGenerator.forBlock['condition'] =
  window.unixGenerator.forBlock.generic;
