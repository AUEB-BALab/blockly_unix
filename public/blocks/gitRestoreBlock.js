var gitRestoreBlock = {
  type: 'git restore',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      filePath: (fieldValues) => {
        return fieldValues['filePath'];
      }
    }
  ],
  message0: '%{BKY_GIT_RESTORE}',
  args0: [
    {
      type: 'field_input',
      name: 'filePath',
      text: 'path/to/file.txt'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_RESTORE_TOOLTIP}',
  helpUrl: '%{BKY_GIT_RESTORE_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitRestoreBlock]);

// Make the block definition findable on the window object because the type has a space
window['git restoreBlock'] = gitRestoreBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git restore'] =
  window.unixGenerator.forBlock.sequence;
