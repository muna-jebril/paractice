'use strict';
require('dotenv').config();

const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const client = new pg.Client(process.env.DATABASE_URL)

app.use(cors());
app.use(express.static('/public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');




client.connect(()=>{
    app.listen(PORT,()=>{
        console.log(`listing to port ${PORT}`);
    })
})