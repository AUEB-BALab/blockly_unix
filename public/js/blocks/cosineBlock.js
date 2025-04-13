var cosineBlock = {
  type: 'cosine',
  unix_description: [
    {
      printName: false,
      X: (fieldValues) => {
        return 'cos(' + fieldValues['X'] + ')';
      }
    }
  ],
  message0: '%{BKY_COSINE}',
  args0: [
    {
      type: 'input_value',
      name: 'X',
      check: 'Number'
    }
  ],
  output: 'Number',
  style: 'math_blocks',
  tooltip: '%{BKY_COSINE_TOOLTIP}',
  helpUrl: '%{BKY_COSINE_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([cosineBlock]);
window.unixGenerator.forBlock['cosine'] = window.unixGenerator.forBlock.generic;
