var gitMergeBlock = {
  type: 'git merge',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      branchToMerge: (fieldValues) => {
        return fieldValues['branchToMerge'];
      }
    }
  ],
  message0: '%{BKY_GIT_MERGE}',
  args0: [
    {
      type: 'field_input',
      name: 'branchToMerge',
      text: 'feature-branch'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_MERGE_TOOLTIP}',
  helpUrl: '%{BKY_GIT_MERGE_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitMergeBlock]);

// Make the block definition findable on the window object because the type has a space
window['git mergeBlock'] = gitMergeBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git merge'] =
  window.unixGenerator.forBlock.sequence;
