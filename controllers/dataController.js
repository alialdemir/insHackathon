var fs = require('fs');
var path = require("path");

function get(req, res) {
    let css = req.query.css;
    let js = req.query.js;
    let rule = req.query.rule;
    let config = req.query.config;

    fs.readFile('data/data.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send({ message: 'Dosya kaydedilemedi.' });

        const json = JSON.parse(data);

        return res.status(200).send({ items: json });
    });
}

function post(req, res) {
    let css = req.body.css;
    let js = req.body.js;
    let rule = req.body.rule;
    let config = req.body.config;

    let obj = { css, js, rule, config };


    fs.readFile('data/data.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send({ message: 'Dosya kaydedilemedi.' });

        var arrData = JSON.parse(data || "[]");
        arrData.push(obj);

        fs.writeFile('data/data.json', JSON.stringify(arrData), 'utf8', (err, data) => {
            if (err) return res.status(500).send({ message: 'Dosya kaydedilemedi.' });

            return res.status(200).send({ message: 'Kayıt edildi.' });
        });
    });
}

function template(req, res) {
    return res.sendFile('template.html', { root: path.join(__dirname, '../views') });
}

module.exports = {
    get,
    post,
    template
}