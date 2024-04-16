const express = require('express');
const router = express.Router();

const userController = require('../controllers/allUserController');
const {  login, sendpasswordlink, forgot, changepass, registerUser, setPassword, setPassword1 } = require("../controllers/AuthController");

// User CRUD operations
router.get('/', userController.getAllUserData);
router.get('/:id', userController.getSingleUserData);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// User authentication operations
router.post("/register", registerUser );
router.get("/setpassword/:id/:token",setPassword );
router.post("/setpassword1/:userId",setPassword1 );

router.post("/login", login);
router.post("/sendmail", sendpasswordlink);
router.get("/forgot/:id/:token", forgot);
router.post("/changePass/:id", changepass);


module.exports = router;
