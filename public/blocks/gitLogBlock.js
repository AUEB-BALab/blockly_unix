var gitLogBlock = {
  type: 'git log',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      oneline: '--oneline',
      stat: '--stat',
      graph: '--graph'
    }
  ],
  message0: '%{BKY_GIT_LOG_0}',
  message1: '%{BKY_GIT_LOG_1}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'oneline',
      checked: true
    }
  ],
  message2: '%{BKY_GIT_LOG_2}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'stat',
      checked: false
    }
  ],
  message3: '%{BKY_GIT_LOG_3}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'graph',
      checked: false
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_LOG_TOOLTIP}',
  helpUrl: '%{BKY_GIT_LOG_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitLogBlock]);

// Make the block definition findable on the window object because the type has a space
window['git logBlock'] = gitLogBlock;

// Register the generator for this block
window.unixGenerator.forBlock['git log'] =
  window.unixGenerator.forBlock.sequence;
