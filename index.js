// import dependencies
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 8080;

// middleware
app.use(express.json());
app.use(cookieParser());

app.get('/api/health', (req, res) => {
    res.send('Hello World!');
});

// cookie parse endpoint
app.get('/', (req, res) => {
    // cookies that have not been signed
    console.log("Unsigned Cookies: ", req.cookies);

    // cookies that have been signed
    console.log("Signed Cookies: ", req.signedCookies);
});

// set the cart cookies
app.get('/add/cart', (req, res) => {
    res.cookie('cart', { items: ["bread", "milk", "cheese"] });
    res.send('Cart cookies set!');
});

// remove the cart cookies
app.get('/remove/cart', (req, res) => {
    res.clearCookie('cart');
    res.send('Cart cookies cleared!');
});

app.get('/cheese', (req, res) => {
    res.cookie('cheese', 'gouda');
    res.send('Cheese cookies set!');
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});