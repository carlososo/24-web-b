const { Router } = require('express');

const { 
  serviceGet, 
  servicePost, 
  servicePut, 
  serviceDel 
} = require('../controllers/servicesController');
const { validarJWT } = require('../middlewares/validar-jwt');
const { 
  celebrateValidatorServices 
} = require("../middlewares/celebrateValidator");

const router = Router()

//CRUD 
router.post("/", validarJWT, celebrateValidatorServices , servicePost );//C
router.get("/", serviceGet );//R
router.put("/:id", servicePut ); //U
router.delete("/:id", serviceDel );//D

module.exports = router