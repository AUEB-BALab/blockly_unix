var FSBlock = {
  type: 'FS',
  category: 'Field Processing',
  unix_description: [
    {
      printName: false,
      FieldSeparator: (fieldValues) => {
        return 'FS = "' + fieldValues['FieldSeparator'] + '"; ';
      }
    }
  ],
  message0: '%{BKY_FIELD_SEPARATOR}',
  args0: [
    {
      type: 'field_input',
      name: 'FieldSeparator'
    }
  ],
  style: 'Special Variables',
  previousStatement: null,
  nextStatement: null,
  tooltip: '%{BKY_FIELD_SEPARATOR_TOOLTIP}',
  helpUrl: '%{BKY_FIELD_SEPARATOR_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([FSBlock]);
window.unixGenerator.forBlock['FS'] = window.unixGenerator.forBlock.concat;
