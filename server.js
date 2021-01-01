const App = require('./app.js');
const port = 8081;

App.listen(port, () =>{
    console.log(`Client request inner api is listening on port ${port}`);
})