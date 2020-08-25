var exp = require('express');
var app = exp();

app.use(exp.static('public'));

let port = process.env.PORT;
if (port==null || port =="") {
    port = 3000;
}
app.listen(port);