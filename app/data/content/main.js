$(document).ready(function(){
    $('#loading').fadeOut();
    var peer = new Peer('teste', {key: '2s3ugw5c1pirizfr'});
    var conn = peer.connect('teste');
    conn.on('open', function() {
      conn.send('Hello world!');
    });
});
