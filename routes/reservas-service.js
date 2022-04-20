'use strict';

const MongoClient = require('mongodb').MongoClient;
let db;
let ObjectId = require('mongodb').ObjectID;

const Reservas = function () {
};

Reservas.prototype.connectDb = function (callback) {
    MongoClient.connect("mongodb+srv://admin:admin@pjss-pnet-2021-2022.zuyq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true},
    function (err, database) {
    
        if (err) {
            callback(err);
        }

        db=database.db('pjss-pnet-2021-2022').collection('reservas');
        callback(err, database);
    });
};

Reservas.prototype.add = function (reserva, callback) {
    return db.insertOne(reserva, callback);
};

Reservas.prototype.get = function (_id, callback) {
    return db.find({_id: ObjectId(_id)}).toArray(callback);
};

Reservas.prototype.getAll = function (callback) {
    return db.find({}).toArray(callback);
};

Reservas.prototype.update = function (_id, updatedReserva, callback) {
    delete updatedReserva._id;
    return db.updateOne(
    {_id: ObjectId(_id)}, {$set: updatedReserva}, callback);
};

Reservas.prototype.remove = function (_id, callback) {
    return db.deleteOne({_id: ObjectId(_id)}, callback);
};

Reservas.prototype.removeAll = function (callback) {
    return db.deleteMany({}, callback);
};

module.exports = new Reservas();