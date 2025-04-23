var gitCleanBlock = {
  type: 'git clean',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      options: (fieldValues) => {
        return fieldValues['options'];
      }
    }
  ],
  message0: '%{BKY_GIT_CLEAN}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'options',
      options: [
        ['files only (-f)', '-f'],
        ['directories only (-d)', '-d'],
        ['both files and directories (-fd)', '-fd'],
        ['Show what would be deleted (dry run) (-n)', '-n']
      ]
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_CLEAN_TOOLTIP}',
  helpUrl: '%{BKY_GIT_CLEAN_HELPURL}'
};

// Register the block with Blockly
Blockly.defineBlocksWithJsonArray([gitCleanBlock]);

// Make the block definition findable on the window object because the type has a space
window['git cleanBlock'] = gitCleanBlock;

// Register the generator for this block
window.unixGenerator.forBlock['git clean'] =
  window.unixGenerator.forBlock.sequence;
