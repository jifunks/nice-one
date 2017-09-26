pushQuote = function(callback) {
  var request = new XMLHttpRequest();
  request.onload = function() {
      var fileContent = this.responseText;
      // need to filter bc of empty element
      var fileContentLines = fileContent.split( '---' ).filter(i => i);
      var randomLineIndex = Math.floor(Math.random() * fileContentLines.length);
      var randomLine = fileContentLines[ randomLineIndex ];
      document.getElementById('text').innerHTML = randomLine;
      callback();
  };
  request.open('GET', 'karlen_quotes.txt', true);
  request.send();
}

pushQuote(function() {
  $(function() {
    $('#text').quickfit();
  });
})
