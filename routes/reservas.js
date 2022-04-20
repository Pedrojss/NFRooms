'use strict';

const express = require('express');
const router = express.Router();
const reservasService = require('./reservas-service');

router.get('/', function (req, res) {
    reservasService.getAll((err, reservas) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else if (reservas.length == 0) {
            res.status(500).send({
                msg: "reservas null"
            });
        } else {
            res.status(200).send(reservas);
        }
    });
});

router.post('/', function (req, res) {
    let reserva = req.body;
    reservasService.add(reserva, (err, reserva) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else if (reserva.length != 0) {
            res.status(201).send({
                msg: 'reserva creada!'
            });
        }
    });
});

router.delete('/', function (req, res) {
    reservasService.removeAll((err) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else {
            res.status(200).send({
                msg: 'reservas eliminadas!'
            });
        }
    });
});

router.get('/:_id', function (req, res) {
    let _id = req.params._id;
    reservasService.get(_id, (err, reserva) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else if (reserva.length == 0) {
            res.status(500).send({
                msg: "reserva no encontrada"
            });
        } else {
            res.status(200).send(reserva);
        }
    });
});

router.put('/:_id', function (req, res) {
    const _id = req.params._id;
    const updatedReserva = req.body;
    reservasService.update(_id, updatedReserva, (err, numUpdates) => {
        if (err) {
            res.status(500).send({ msg: err });
        } else if (numUpdates.modifiedCount === 0) {
            res.status(500).send({ msg: "sin actualizar" });
        } else {
            res.status(200).send({ msg: 'reserva actualizada!' });
        }
    });
});

router.delete('/:_id', function (req, res) {
    let _id = req.params._id;
    reservasService.remove(_id, (err) => {
        if(err){
            res.status(500).send({msg: err});
        }else{
            res.status(200).send({ msg: 'reserva eliminada!' });
        }
    });
});

module.exports = router;