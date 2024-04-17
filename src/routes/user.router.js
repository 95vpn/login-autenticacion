const { getAll, create, getOne, remove, update, veryCode, login, logged, resetPassword, updatePassword } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get(getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/me')
    .get(logged)

routerUser.route('/reset_password')
    .post(resetPassword)


routerUser.route('/verify/:code')
    .get(veryCode);

routerUser.route('/reset_password/:code')
    .post(updatePassword)

routerUser.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerUser;

function exterior() {
    let variableExterior = "Exterior";
  
    function interior() {
      let variableInterior = "Interior";
      console.log(variableExterior); // Acceso a variable exterior
    }
  
    interior();
  }
  
  exterior();