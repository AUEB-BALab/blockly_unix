var setSeedBlock = {
  type: 'setSeed',
  unix_description: [
    {
      printName: false,
      seed: (fieldValues) => {
        return 'srand(' + fieldValues['seed'] + ')';
      }
    }
  ],
  message0: '%{BKY_SETSEED}',
  args0: [
    {
      type: 'input_value',
      name: 'seed',
      check: 'Number'
    }
  ],
  output: 'Number',
  style: 'math_blocks',
  tooltip: '%{BKY_SET_SEED_TOOLTIP}',
  helpUrl: '%{BKY_SET_SEED_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([setSeedBlock]);
window.unixGenerator.forBlock['setSeed'] =
  window.unixGenerator.forBlock.generic;
