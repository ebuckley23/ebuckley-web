require('dotenv').config();
const controllers = require('./controllers');
const {
  ebuckleyController,
  subscribersController,
  adminController,
  skillsController,
  authenticationController
} = controllers;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonwebtoken = require("jsonwebtoken");

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// middleware to retrieve bearer token from header
app.use((req, res, next) => {
  if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY, function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

app.use('/api/ebuckley', ebuckleyController);
app.use('/api/subscribers', subscribersController);
app.use('/api/skills', skillsController);
app.use('/api/authenticate', authenticationController);
app.use('/api/admin', (req, res, next) => {
  // require authentication and persmission
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({message: 'Unauthorized'});
  }
}, adminController);

app.listen(process.env.PORT || 8080, () => console.log('success'));