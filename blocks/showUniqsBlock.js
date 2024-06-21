var showUniqsBlock = {
  type: 'showUniqs',
  message0: '%{BKY_SHOWUNIQS}',
  category: 'Text Processing',
  unix_description: [
    {
      uniq: '-u', // uniq -u
    },
  ],

  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_SHOWUNIQS_TOOLTIP}',
  helpUrl: '%{BKY_SHOWUNIQS_HELPURL}', // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([showUniqsBlock]);
