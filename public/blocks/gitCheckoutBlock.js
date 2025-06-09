var gitCheckoutBlock = {
  type: 'git checkout',
  category: 'Git Version Control',
  unix_description: [
    {
      printName: true,
      branchName: (fieldValues) => {
        return fieldValues['branchName'];
      }
    }
  ],
  message0: '%{BKY_GIT_CHECKOUT}',
  args0: [
    {
      type: 'field_input',
      name: 'branchName',
      text: 'main'
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Git Version Control',
  tooltip: '%{BKY_GIT_CHECKOUT_TOOLTIP}',
  helpUrl: '%{BKY_GIT_CHECKOUT_HELPURL}'
};

// Register the block
Blockly.defineBlocksWithJsonArray([gitCheckoutBlock]);

// Make the block definition findable on the window object because the type has a space
window['git checkoutBlock'] = gitCheckoutBlock;

// Register the generator for this block to use the 'sequence' connector
window.unixGenerator.forBlock['git checkout'] =
  window.unixGenerator.forBlock.sequence;
