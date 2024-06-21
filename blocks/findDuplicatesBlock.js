var findDuplicatesBlock = {
  type: 'findDuplicates',
  message0: '%{BKY_FIND_DUPLICATES}',
  category: 'Text Processing',
  unix_description: [
    {
      duplicates: '-d', // uniq -d
    },
  ],

  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_FIND_DUPLICATES_TOOLTIP}',
  helpUrl: '', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([findDuplicatesBlock]);
