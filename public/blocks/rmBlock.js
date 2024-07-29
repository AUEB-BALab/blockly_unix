var rmBlock = {
    type: "rm",
    category: "File and Directory Operations",
    message0: "remove %1",
    unix_description: [
      {
        command: 'rm %FILE'
      }
    ],
    args0: [
      {
        type: "field_input",
        name: "FILE",
        text: "file" // default file
      }
    ],
    style: "File and Directory Operations",
    previousStatement: "Action",
    nextStatement: "Action",
    tooltip: "Διαγράφει αρχεία και καταλόγους.",
    helpUrl: "https://linux.die.net/man/1/rm"
  };
  
  Blockly.defineBlocksWithJsonArray([rmBlock]);
//  