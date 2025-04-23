var gitAddBlock = {
  type: 'git add',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      addOption: (fieldValues) => {
        if (fieldValues['addOption'] === '.') {
          return '.';
        }
        return '';
      },
      addPath: (fieldValues) => {
        if (fieldValues['addOption'] === 'specific') {
          return fieldValues['addPath'];
        }
        return '';
      }
    }
  ],
  message0: '%{BKY_GIT_ADD_0}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'addOption',
      options: [
        ['all files', '.'],
        ['specific file', 'specific']
      ]
    }
  ],
  message1: '%{BKY_GIT_ADD_1}',
  args1: [
    {
      type: 'field_input',
      name: 'addPath',
      text: 'path/to/file.txt'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_ADD_TOOLTIP}',
  helpUrl: '%{BKY_GIT_ADD_HELPURL}'
};

// Register the block with Blockly
Blockly.defineBlocksWithJsonArray([gitAddBlock]);

// Make the block definition findable on the window object because the type has a space
window['git addBlock'] = gitAddBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git add'] =
  window.unixGenerator.forBlock.sequence;
