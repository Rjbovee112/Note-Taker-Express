var data = require("../db/db.json");


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(data);
    });

    app.post("/api/notes", function (req, res) {
        data.push(req.body);
        res.json(true);
    });

    app.delete("/api/notes/:id", function (req, res) {
        let deleteThis = req.params.id;
        for (let i = 0; i < data.length; i++) {
            if (deleteThis === data[i].id) {
                data.splice(i, 1);
            }
        }
        for (let i = 0; i < data.length; i++) {
            data[i].id = i.toString();
        }
        res.json({ ok: true })
    })


}