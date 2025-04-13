var regCommonBlock = {
  type: 'regCommon',
  category: 'Regular Expressions',
  unix_description: [
    {
      printName: false,
      email: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,4}',
      URL: '(?:https?://|www.)[^s]+',
      IP: '^((25[0-5]|(2[0-4]|1d|[1-9]|)d).?\b){4}$',
      MMDDYYYY: '(0[1-9]|1[0-2])[/-](0[1-9]|[12][0-9]|3[01])[/-](19|20)d{2}',
      DDMMYYYY: '(0[1-9]|[12][0-9]|3[01])[/-](0[1-9]|1[0-2])[/-](19|20)d{2}',
      YYYYMMDD: '(19|20)d{2}[/-](0[1-9]|1[0-2])[/-](0[1-9]|[12][0-9]|3[01])'
    }
  ],
  message0: '%{BKY_REGCOMMON}',
  message1: '%{BKY_REGCOMMON_MATCH}',
  args1: [
    {
      type: 'field_dropdown',
      name: 'reg_common',
      options: [
        ['email address', 'email'],
        ['URL', 'URL'],
        ['IP address', 'IP'],
        ['date in MM/DD/YYYY Format', 'MMDDYYYY'],
        ['date in DD/MM/YYYY Format', 'DDMMYYYY'],
        ['date in YYYY/MM/DD Format', 'YYYYMMDD']
      ]
    }
  ],
  style: 'Regular Expressions',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_REGCOMMON_TOOLTIP}',
  helpUrl: '%{BKY_REGCOMMON_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regCommonBlock]);
window.unixGenerator.forBlock['regCommon'] =
  window.unixGenerator.forBlock.concat;
