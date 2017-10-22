var express = require('express');
var reload = require('reload');
var app = express();

app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Site Title';

app.use(express.static('app/public'));

app.use(require('./controllers/index'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
