var gitBranchBlock = {
  type: 'git branch',
  message0: '%{BKY_GIT_BRANCH} %1',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      branchName: (fieldValues) => {
        return fieldValues['branchName'];
      }
    }
  ],
  message0: '%{BKY_GIT_BRANCH}',
  args0: [
    {
      type: 'field_input',
      name: 'branchName',
      text: 'feature-branch'
    }
  ],
  style: 'Git Version Control',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_GIT_BRANCH_TOOLTIP}',
  helpUrl: '%{BKY_GIT_BRANCH_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitBranchBlock]);

// Make the block definition findable
window['git branchBlock'] = gitBranchBlock;

// Register the generator for this block
window.unixGenerator.forBlock['git branch'] =
  window.unixGenerator.forBlock.sequence;
