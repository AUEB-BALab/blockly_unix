var curlBlock = {
  type: 'curl',
  message0: '%{BKY_CURL} %1',
  unix_description: [
    {
      printName: true,
      GET: '-X GET',
      POST: '-X POST',
      PUT: '-X PUT',
      DELETE: '-X DELETE',
      url: 'str ',
      follow_redirects: '-L'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'url',
      text: 'https://example.com'
    }
  ],

  message1: '%{BKY_CURL_METHOD}: %1',
  args1: [
    {
      type: 'field_dropdown',
      name: 'request',
      options: [
        ['GET', 'GET'],
        ['POST', 'POST'],
        ['PUT', 'PUT'],
        ['DELETE', 'DELETE']
      ]
    }
  ],

  message2: '%{BKY_CURL_REDIRECTS}: %1',
  args2: [
    {
      type: 'field_checkbox',
      name: 'follow_redirects',
      checked: false
    }
  ],

  category: 'Network Operations',
  style: 'Network Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Transfer data from or to a server using curl',
  helpUrl: 'https://linux.die.net/man/1/curl'
};

Blockly.defineBlocksWithJsonArray([curlBlock]);
window.unixGenerator.forBlock['curl'] = window.unixGenerator.forBlock.generic;
