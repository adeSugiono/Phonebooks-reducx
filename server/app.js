var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb://localhost/phonedb', {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
var userRouter = require('./routes/user');
var phonebooksRouter = require('./routes/phonebooks');
const { request } = require('express');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', userRouter);
app.use('/api/phonebooks', phonebooksRouter);

module.exports = app;
