var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = {};
// mount middlewares

app.use(express.static('../mycontacts/www'));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    console.log(req.method + ':' + req.url);
    if (!req.url.startsWith('/mycontacts') ||
        (req.url === '/mycontacts/sessions') ||
        (req.url === '/mycontacts/users' && req.method === 'POST')) {
        next();
    } else if (!req.query.token) {
        res.send(401, 'Token missing');
    } else if (!db[req.query.token]) {
        res.send(401, 'Invalid token');
    } else {
        next();
    }
});
// define routes
// sessions
app.post('/mycontacts/sessions', function (req, res) {
    console.log('POST /mycontacts/sessions');
    if (!req.body.email || !req.body.password) res.send(400, 'Missing data');
    else {
        for (var id in db) {
            if (db[id].email === req.body.email
                && db[id].password === req.body.password) {
                res.send({ userId: id, token: Number(id) });
                return;
            }
        }
        res.send(401);
    }
});
// users
app.get('/mycontacts/users/:userId', function (req, res) {
    console.log('GET /mycontacts/users/' + req.params.userId);
    var userId = req.params.userId;
    if (!userId) res.send(400, 'Missing parameter');
    else if (!db[userId]) res.send(404, 'User not found');
    else {
        var user = {
            id: db[userId].id, email: db[userId].email,
            name: db[userId].name, surname: db[userId].surname,
            avatar: db[userId].avatar
        };
        res.send(user);
    }
});
app.post('/mycontacts/users', function (req, res) {
    console.log('POST /mycontacts/users');
    if (!req.body.email || !req.body.password
        || !req.body.name || !req.body.surname)
        res.send(400, 'Missing data');
    else {
        var user = {
            id: Date.now(), email: req.body.email,
            password: req.body.password, name: req.body.name,
            surname: req.body.surname, avatar: req.body.avatar,
            contacts: []
        };
        db[user.id] = user;
        res.send({
            id: user.id, email: user.email, name: user.name,
            surname: user.surname, avatar: user.avatar
        });
    }
});
app.put('/mycontacts/users/:userId', function (req, res) {
    console.log('PUT /mycontacts/users/' + req.params.userId);
    var userId = req.params.userId;
    if (!userId) res.send(400, 'Missing parameter');
    else if (!db[userId]) res.send(404, 'User not found');
    else {
        db[userId].email = req.body.email || db[userId].email;
        db[userId].password = req.body.password || db[userId].password;
        db[userId].name = req.body.name || db[userId].name;
        db[userId].surname = req.body.surname || db[userId].surname;
        db[userId].avatar = req.body.avatar || db[userId].avatar;
        db[userId].position = req.body.position || db[userId].position;
        res.send({
            id: db[userId].id, email: db[userId].email,
            name: db[userId].name, surname: db[userId].surname,
            avatar: db[userId].avatar
        });
    }
});
// contacts
app.get('/mycontacts/users/:userId/contacts', function (req, res) {
    console.log('GET /mycontacts/users/' + req.params.userId + '/contacts');
    var userId = req.params.userId;
    if (!userId) res.send(400, 'Missing parameter');
    else if (!db[userId]) res.send(404, 'User not found');
    else {
        var contacts = db[userId].contacts;
        if (req.query.q) {
            var regexp = new RegExp(req.query.q);
            contacts = db[userId].contacts.filter((contact) => {
                for (var att in contact) {
                    if (regexp.test(contact[att])) return true;
                }
                return false;
            });
        }
        res.send(contacts);
    }
});
app.get('/mycontacts/users/:userId/contacts/:contactId', function (req, res) {
    console.log('GET /mycontacts/users/' + req.params.userId + '/contacts/'
        + req.params.contactId);
    var userId = req.params.userId;
    var contactId = req.params.contactId;
    if (!userId || !contactId) res.send(400, 'Missing parameter');
    else if (!db[userId]) res.send(400, 'User not found');
    else {
        var index = db[userId].contacts.findIndex((contact) => {
            return contact.id == contactId;
        });
        if (index === -1) res.send(404, 'Contact not found');
        else res.send(db[userId].contacts[index]);
    }
});
app.post('/mycontacts/users/:userId/contacts', function (req, res) {
    console.log('POST /mycontacts/users/' + req.params.userId + '/contacts');
    var userId = req.params.userId;
    if (!userId) res.send(400, 'Missing parameter');
    else if (!db[userId]) res.send(404, 'User not found');
    else {
        if (!req.body.email || !req.body.name || !req.body.surname)
            res.send(400, 'Missing data');
        else {
            var contact = {
                id: Date.now(), email: req.body.email,
                name: req.body.name, surname: req.body.surname,
                avatar: req.body.avatar
            };
            db[userId].contacts.push(contact);
            res.send(contact);
        }
    }
});
app.put('/mycontacts/users/:userId/contacts/:contactId', function (req, res) {
    console.log('PUT /mycontacts/users/' + req.params.userId + '/contacts/'
        + req.params.contactId);
    var userId = req.params.userId;
    var contactId = req.params.contactId;
    if (!userId || !contactId) res.send(400, 'Missing parameter');
    else if (!db[userId]) res.send(400, 'User not found');
    else {
        var index = db[userId].contacts.findIndex((contact) => {
            return contact.id == contactId;
        });
        if (index === -1) res.send(404, 'Contact not found');
        else {
            db[userId].contacts[index].email = req.body.email ||
                db[userId].contacts[index].email;
            db[userId].contacts[index].name = req.body.name ||
                db[userId].contacts[index].name;
            db[userId].contacts[index].surname = req.body.surname ||
                db[userId].contacts[index].surname;
            db[userId].contacts[index].avatar = req.body.avatar ||
                db[userId].contacts[index].avatar;
            res.send(db[userId].contacts[index]);
        }
    }
});
app.delete('/mycontacts/users/:userId/contacts/:contactId', function (req, res) {
    console.log('DELETE /mycontacts/users/' + req.params.userId + '/contacts/'
        + req.params.contactId);
    var userId = req.params.userId;
    var contactId = req.params.contactId;
    if (!userId || !contactId) res.send(400, 'Missing parameter');
    else if (!db[userId]) res.send(400, 'User not found');
    else {
        var index = db[userId].contacts.findIndex((contact) => {
            return contact.id == contactId;
        });
        if (index === -1) res.send(404, 'Contact not found');
        else {
            db[userId].contacts.splice(index, 1);
            res.send(204);
        }
    }
});
app.listen(8080);
console.log('HTTP server running');
