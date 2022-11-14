const router = require("express").Router();
const {Register,GetUser,GetUsers,DeleteUser} = require("../controllers/User");

router.post('/',Register);
router.get('/:id',GetUser);
router.delete('/:id',DeleteUser);
router.get('/all',GetUsers);

module.exports = router;