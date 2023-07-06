exports.respondWithName = (req, res) => {
    // assign a local variable to a request parameter.
    // let paramsName = req.params.myName;
    // pass a local variable to a rendered view.
    res.render("index", { name: paramsName });
};