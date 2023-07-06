// to show example add <% let name = "Jon"; %> to index.ejs
// exports.respondWithName = (req, res) => {
//     // use render method on response object to respond with view from views folder.
//     // note: don't have to add .ejs to index and don't need to specify folder that view comes from.
//     // This is because Express.js takes care of it for you.
//     res.render("index");
// };

exports.respondWithName = (req, res) => {
    // assign a local variable to a request parameter.
    let paramsName = req.params.myName;
    // pass a local variable to a rendered view.
    res.render("index", { name: paramsName });
};