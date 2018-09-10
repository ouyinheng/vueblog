const express = require('express');

const app = new express();

app.use(express.static('docs'));

app.listen(10086);