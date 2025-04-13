var OFSBlock = {
  type: 'OFS',
  category: 'Field Processing',
  unix_description: [
    {
      printName: false,
      FieldSeparator: (fieldValues) => {
        return 'OFS = "' + fieldValues['FieldSeparator'] + '"; ';
      }
    }
  ],
  message0: '%{BKY_OUTPUT_FIELD_SEPARATOR}',
  args0: [
    {
      type: 'field_input',
      name: 'FieldSeparator'
    }
  ],
  style: 'Special Variables',
  previousStatement: null,
  nextStatement: null,
  tooltip: '%{BKY_OUTPUT_FIELD_SEPARATOR_TOOLTIP}',
  helpUrl: '%{BKY_OUTPUT_FIELD_SEPARATOR_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([OFSBlock]);
window.unixGenerator.forBlock['OFS'] = window.unixGenerator.forBlock.concat;
