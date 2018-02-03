var fs = require('fs');
var path = require("path");

function get(req, res) {
    fs.readFile('data/data.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send({ message: 'Dosya kaydedilemedi.' });

        const json = JSON.parse(data);

        return res.status(200).send({ items: json });
    });
}

function post(req, res) {
    let css = req.body.css;
    let title = req.body.title;
    let js = req.body.js;
    let config = req.body.config;


    fs.readFile('data/data.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send({ message: 'Dosya kaydedilemedi.' });

        var arrData = JSON.parse(data || []);
        let id = arrData.length > 0 ? arrData[arrData.length - 1].id + 1 : 1;

        let obj = { id, css, js, config };
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

function deleteItem(req, res) {
    let id = req.body.id;
    fs.readFile('data/data.json', 'utf8', (err, data) => {
        if (err) return res.status(500).send({ message: 'Dosya kaydedilemedi.' });

        let arrData = JSON.parse(data);

    });
}

module.exports = {
    get,
    post,
    template,
    deleteItem
}