var regLookaheadBlock = {
  type: 'regLookahead',
  category: 'Regular Expressions',
  unix_description: [
    {
      positive: '(?= patt)',
      negative: '(?! patt)',
    },
  ],
  message0: '%{BKY_REGLOOKAHEAD}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'reg_lookahead',
      options: [
        ['is', 'positive'],
        ['is not', 'negative'],
      ],
    },
    {
      type: 'input_value',
      name: 'regPattern',
      check: 'String',
    },
  ],
  style: 'Regular Expressions',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_REGLOOKAHEAD_TOOLTIP}',
  helpUrl: '%{BKY_REGLOOKAHEAD_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regLookaheadBlock]);
