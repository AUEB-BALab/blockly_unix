var cutBlock = {
  type: 'cut',
  category: 'Text Processing',
  unix_description: [
    {
      printName: true,
      delimiter: (fieldValues) => {
        return "-d '" + fieldValues['delimiter'] + "'";
      }, // Wrap value in -d 'value'
      columns: (fieldValues) => {
        const columns = fieldValues['columns'] || '';

        // Normalize by replacing any whitespace or multiple delimiters with a single comma
        return (
          '-f ' +
          columns
            .split(/[\s,]+/) // Split by any whitespace or commas
            .filter((col) => col.trim()) // Remove empty entries
            .join(',')
        ); // Join with a comma
      }, // Format for specific columns
      colsStart: (fieldValues) => {
        const { columns, colsStart, colsEnd } = fieldValues;

        if (columns) {
          // If columns have values, append colsStart and colsEnd next to them
          return colsStart
            ? `,${colsStart}${colsEnd ? `-${colsEnd}` : '-'}`
            : '';
        }
        // If columns were empty, start with '-f' and use colsStart and colsEnd
        return colsStart
          ? `-f ${colsStart}${colsEnd ? `-${colsEnd}` : '-'}`
          : '';
      },
      individualChars: (fieldValues) => {
        const individualChars = fieldValues['individualChars'] || '';

        // Normalize by replacing any whitespace or multiple delimiters with a single comma
        return (
          '-c ' +
          individualChars
            .split(/[\s,]+/) // Split by any whitespace or commas
            .filter((char) => char.trim()) // Remove empty entries
            .join(',')
        ); // Join with a comma
      },

      // Handle starting characters
      charsStart: (fieldValues) => {
        const { individualChars, charsStart, charsEnd } = fieldValues;

        if (individualChars) {
          // If individualChars have values, append charsStart and charsEnd next to them
          return charsStart
            ? `,${charsStart}${charsEnd ? `-${charsEnd}` : '-'}`
            : '';
        }
        // If individualChars were empty, start with '-c' and use charsStart and charsEnd
        return charsStart
          ? `-c ${charsStart}${charsEnd ? `-${charsEnd}` : '-'}`
          : '';
      }
    }
  ],
  message0: '%{BKY_CUT}\n',
  message1: '%{BKY_CUT_DELIMITER} %1\n',
  args1: [
    {
      type: 'field_input',
      name: 'delimiter',
      text: ''
    }
  ],
  message2: '%{BKY_CUT_DEFINE_COLUMNS} %1\n',
  args2: [
    {
      type: 'field_input',
      name: 'columns',
      text: ''
    }
  ],
  message3: '%{BKY_CUT_COLUMNS_START} %1 %{BKY_CUT_COLUMNS_END} %2\n',
  args3: [
    {
      type: 'field_input',
      name: 'colsStart',
      text: ''
    },
    {
      type: 'field_input',
      name: 'colsEnd',
      text: ''
    }
  ],
  message4: '%{BKY_CUT_SPECIFIC_CHARACTERS} %1\n',
  args4: [
    {
      type: 'field_input',
      name: 'individualChars',
      text: ''
    }
  ],
  message5: '%{BKY_CUT_START} %1 %{BKY_CUT_END} %2',
  args5: [
    {
      type: 'field_input',
      name: 'charsStart',
      text: ''
    },
    {
      type: 'field_input',
      name: 'charsEnd',
      text: ''
    }
  ],
  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_CUT_TOOLTIP}',
  helpUrl: '%{BKY_CUT_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([cutBlock]);

window.unixGenerator.forBlock['cut'] = window.unixGenerator.forBlock.generic;
