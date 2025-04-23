var gitViewConfigBlock = {
  type: 'git config --list',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      options: (fieldValues) => {
        return fieldValues['options'];
      }
    }
  ],
  message0: '%{BKY_GIT_VIEW_CONFIG}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'options',
      options: [
        ['User-level (global)', '--global'],
        ['System-wide', '--system'],
        ['Repository-specific', '--local']
      ]
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_VIEW_CONFIG_TOOLTIP}',
  helpUrl: '%{BKY_GIT_VIEW_CONFIG_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitViewConfigBlock]);

// Make the block definition findable on the window object because the type has a space
window['git config --listBlock'] = gitViewConfigBlock;

// Generator function
window.unixGenerator.forBlock['git config --list'] =
  window.unixGenerator.forBlock.sequence;
