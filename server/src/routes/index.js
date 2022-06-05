const express = require('express')


const { auth } = require("../middlewares/auth.js") ;

const { registerUser, loginUser, checkAuth } = require("../controllers/auth");

const { uploadFiles } = require("../middlewares/uploadFiles.js");

const { addArtikel, getArtikels, deleteAtikel } = require("../controllers/product")

const {
    addUsers,
    getUsers
} = require('../controllers/user')

const router = express.Router()

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-auth", auth, checkAuth);

router.post("/artikel", auth, uploadFiles("pdf", "image"), addArtikel);
router.get("/artikels", auth, getArtikels);
router.delete("/artikel/:id", auth, deleteAtikel);

router.post('/user', addUsers);
router.get('/users', auth, getUsers);

module.exports = router