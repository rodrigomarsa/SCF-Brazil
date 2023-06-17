const express = require('express');
const {
  teste1,
  teste2,
  teste3,
  teste4,
  teste5,
  login,
} = require('../controllers');
const auth = require('../middlewares/auth');
const validateNewUser = require('../middlewares/validateNewUser');

const router = express.Router();

router.get('/user', teste1.getUser);
router.post('/login', login);
router.get('/users/access', teste5);

router
  .route('/users')
  .get(teste1.getUsers)
  .post(validateNewUser, teste2)
  .delete(auth, teste3)
  .put(auth, teste4);

module.exports = router;
