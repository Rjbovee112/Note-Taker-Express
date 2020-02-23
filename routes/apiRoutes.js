var noteData = require("../db/db.json");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    app.post("/api/notes", function (req, res) {
        noteData.push(req.body);
        res.json(true);
    });

    app.delete("/api/notes/:id", function (req, res) {
        let deleteThis = req.params.id;
        for (let i = 0; i < noteData.length; i++) {
            if (deleteThis === noteData[i].id) {
                noteData.splice(i, 1);
            }
        }
        for (let i = 0; i < noteData.length; i++) {
            noteData[i].id = i.toString();
        }
        res.json({ ok: true })
    })


}