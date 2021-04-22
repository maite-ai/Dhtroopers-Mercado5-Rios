const express = require("express");
const app = express();
const port = process.env.PORT;

const homeRouter = require('./routes/homeRouter');

//const userRouter = require('./routes/userRouter');
//const productRouter = require('./routes/productRouter');

app.use(express.static('public'));
// Configuro EJS
app.set('view engine', 'ejs');


// Llamo al ruteo
app.use('/', homeRouter);
//app.use('/', userRouter);
//app.use('/products', productRouter);

app.listen(port || 3000, () => {
    console.log("El servidor está corriendo con éxito ");
});