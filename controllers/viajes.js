const { response } = require("express");

const Viajes = require("../models/viajes");

const viajesGet = async (req, res = response) => {
  const viajes = await Viajes.find();

  res.json({
    viajes,
  });
};

const viajesPost = async (req, res) => {
  const body = req.body;
  let mensaje = "Viaje creado.";

  try {
    const viajes = new Viajes(body);
    await viajes.save();
  } catch (error) {
    mensaje = "Problemas al crear el viaje.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
}

const viajesPut = async (req, res) => {
  const { _id, codigo, ciudadOrigen, Ciudaddestino, precioPesos, cantidadPasajeros } = req.body;
  let mensaje = "Modificación exitosa";

  try {
    await Viajes.findOneAndUpdate({ _id: _id }, { codigo: codigo, ciudadOrigen: ciudadOrigen, Ciudaddestino: Ciudaddestino, precioPesos: precioPesos, cantidadPasajeros: cantidadPasajeros   });
  } catch (error) {
    mensaje = "Problemas al modificar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const viajesDelete = async (req, res = response) => {
  const { _id } = req.body;
  let mensaje = "Eliminación exitosa";
  try {
    await Viajes.deleteOne({ _id: _id });
  } catch (error) {
    mensaje = "Problemas al eliminar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const viajesGetByCiudadOrigen = async (req, res = response) => {
  const { ciudadOrigen } = req.body;
  let mensaje = "Viajes encontrados.";
  let viajes;
 
  try {
    viajes = await Viajes.find({ ciudadOrigen: ciudadOrigen });
  } catch (error) {
    mensaje = "Problemas al obtener los viajes.";
    console.log(error);
    return res.status(500).json({
      msg: mensaje,
      error: error.message,
    });
  }

  res.json({
    msg: mensaje,
    viajes: viajes,
  });
};






module.exports = { viajesGet, viajesPost, viajesPut, viajesDelete, viajesGetByCiudadOrigen};



//terremotos: fecha, magnitud, ubicacion