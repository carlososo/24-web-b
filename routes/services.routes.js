const { Router } = require('express');

const { 
  serviceGet, 
  servicePost, 
  servicePut, 
  serviceDel 
} = require('../controllers/servicesController');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router()

//CRUD 
router.post("/", validarJWT , servicePost );//C
router.get("/", serviceGet );//R
router.put("/:id", servicePut ); //U
router.delete("/:id", serviceDel );//D

module.exports = router