var ENVIRONBlock = {
  type: 'ENVIRON',
  category: 'Field Processing',
  unix_description: [
    {
      printName: false,
      HOME: 'ENVIRON["HOME"]',
      PATH: 'ENVIRON["PATH"]',
      USER: 'ENVIRON["USER"]',
      SHELL: 'ENVIRON["SHELL"]',
      PWD: 'ENVIRON["PWD"]',
      LANG: 'ENVIRON["LANG"]',
      TERM: 'ENVIRON["TERM"]',
      EDITOR: 'ENVIRON["EDITOR"]',
      MAIL: 'ENVIRON["MAIL"]',
      LOGNAME: 'ENVIRON["LOGNAME"]',
      HOSTNAME: 'ENVIRON["HOSTNAME"]',
      OLDPWD: 'ENVIRON["OLDPWD"]',
      LINES: 'ENVIRON["LINES"]',
      COLUMNS: 'ENVIRON["COLUMNS"]'
    }
  ],
  message0: '%{BKY_ENVIRONMENT_VARIABLE} %1\n',
  args0: [
    {
      type: 'field_dropdown',
      name: 'ENV_VAR',
      options: [
        ['Home Directory (HOME)', 'HOME'],
        ['System Path (PATH)', 'PATH'],
        ['Username (USER)', 'USER'],
        ['Shell Type (SHELL)', 'SHELL'],
        ['Current Directory (PWD)', 'PWD'],
        ['Language Setting (LANG)', 'LANG'],
        ['Terminal Type (TERM)', 'TERM'],
        ['Default Editor (EDITOR)', 'EDITOR'],
        ['Mail Directory (MAIL)', 'MAIL'],
        ['Login Name (LOGNAME)', 'LOGNAME'],
        ['Hostname (HOSTNAME)', 'HOSTNAME'],
        ['Previous Directory (OLDPWD)', 'OLDPWD'],
        ['Terminal Lines (LINES)', 'LINES'],
        ['Terminal Columns (COLUMNS)', 'COLUMNS']
      ]
    }
  ],
  style: 'Special Variables',
  output: null,
  tooltip: '%{BKY_ENVIRONMENT_VARIABLE_TOOLTIP}',
  helpUrl: '%{BKY_ENVIRONMENT_VARIABLE_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([ENVIRONBlock]);
window.unixGenerator.forBlock['ENVIRON'] =
  window.unixGenerator.forBlock.generic;
