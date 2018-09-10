const express = require('express');

const app = new express();

app.use(express.static('vueblog'));

app.listen(10086);