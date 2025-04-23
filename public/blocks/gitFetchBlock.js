var gitFetchBlock = {
  type: 'git fetch',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      remoteName: (fieldValues) => {
        return fieldValues['remoteName'];
      }
    }
  ],
  message0: '%{BKY_GIT_FETCH}',
  args0: [
    {
      type: 'field_input',
      name: 'remoteName',
      text: 'origin'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_FETCH_TOOLTIP}',
  helpUrl: '%{BKY_GIT_FETCH_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitFetchBlock]);

// Make the block definition findable on the window object because the type has a space
window['git fetchBlock'] = gitFetchBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git fetch'] =
  window.unixGenerator.forBlock.sequence;
