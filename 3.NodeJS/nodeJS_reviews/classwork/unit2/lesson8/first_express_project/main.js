const port = 3000,
    // add express module to home page
    express = require("express"),
    // express webserver application instantiated and stored in a constant reffered to as app.
    app = express();
// GET route for home page
app.get("/", (req, res) => {
    // similar to write method is the send method. (If using write, must end off with end())
    res.send("Hello, Universe!");
    // params: allows you to extract IDs and tokens from URLs.
    console.log(req.params);
    //body: contains most of contents from request(often including data from POST request)
    console.log(req.body);
    //url: provides info about URL being visited.
    console.log(req.url);
    //query: allows you to pull data submitted to application server (not necessarily from POST request.)
    // often requested in URL as query string (eg http://localhost3000?name=Jon)
    console.log(req.query);
})
    .listen(port, () => {
        console.log(`The Express.js server has started and is listening on port number: ${port}`);
    });