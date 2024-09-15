var pingBlock = {
  type: 'ping',

  unix_description: [
    {
      address: 'str',
      count: '-c ',
      interval: '-i ',
      timeout: '-W ',
      host: 'str '
    }
  ],
  message0: '%{BKY_PING} %1',
  args0: [
    {
      type: 'field_input',
      name: 'address',
      text: 'hostname'
    }
  ],

  message1: '%{BKY_PING_COUNT}: %1',
  args1: [
    {
      type: 'field_number',
      name: 'count',
      value: 4
    }
  ],

  message2: '%{BKY_PING_INTERVAL}: %1',
  args2: [
    {
      type: 'field_number',
      name: 'interval',
      value: 1
    }
  ],

  message3: '%{BKY_PING_TIMEOUT}: %1',
  args3: [
    {
      type: 'field_number',
      name: 'timeout',
      value: 5
    }
  ],

  category: 'Network Operations',
  style: 'Network Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_PING_TOOLTIP}'
};

Blockly.defineBlocksWithJsonArray([pingBlock]);
