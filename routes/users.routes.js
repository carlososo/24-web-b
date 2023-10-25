const { Router } = require("express");
const { 
  createUser,
  readUser,
  updateUser,
  deleteUser
} = require('../controllers/usersController');

const router = Router();

router.post("/", createUser)          //C Create
router.get("/", readUser)           //R read
router.put("/:userId", updateUser)    //U Update
router.delete("/:userId", deleteUser) //D Delete


module.exports = router