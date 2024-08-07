var sshBlock = {
  type: 'ssh',
  category: 'Network Operations',
  message0: 'ssh %1',
  unix_description: [
    {
      command: 'ssh %USER@%HOST -p %PORT %COMMAND'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'HOST',
      text: 'host' // default host
    }
  ],
  message1: 'User %1',
  args1: [
    {
      type: 'field_input',
      name: 'USER',
      text: 'user' // default user
    }
  ],
  message2: 'Port %1',
  args2: [
    {
      type: 'field_input',
      name: 'PORT',
      text: '22' // default port
    }
  ],
  style: 'Network Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Ανοίγει ασφαλείς συνδέσεις δικτύου.',
  helpUrl: 'https://linux.die.net/man/1/ssh'
};

Blockly.defineBlocksWithJsonArray([sshBlock]);
//
