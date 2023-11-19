const express = require('express');
const db = require('./config/connection')

const { Thought, User } = require('./models');

const app = express()

