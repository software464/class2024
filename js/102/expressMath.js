import express from 'express';
const app = express();
app.listen(8080);
app.get('/index.html', (req, res) => {
    console.log("in res")
    res.send("hello from express");

})
app.use((req, res, next) => {
    const operator = req.query.operator;
    const num1 = +req.query.num1;
    const num2 = +req.query.num2;
    //check for nan
    if (Number.isFinite(num1 + num2)) {
        req.num1 = num1;
        req.num2 = num2;
        req.operator = operator;
        next()

    }
    else {
        const error = new Error();
        //error stuff
        next(error)
        //res.send('ur inputs arent valid')
    }







});

app.get('/add', (req, res, next) => {

    const result = req.num1 + req.num2;


    console.log("in res")
    res.send("ur nunber is " + result);

});
app.get('/subtract', (req, res) => {
    const result = req.num1 - req.num2;


    console.log("in res")
    res.send("ur number is " + result);

})
app.get('/dynamic', (req, res) => {
    let result;
    switch (req.operator) {
        case "+":
            result = req.num1 + req.num2;
            break;
        case "-":
            result = req.num1 - req.num2;
            break;
        case "*":
            result = req.num1 * req.num2;
            break;
        case "/":
            result = req.num1 / req.num2;
            break;
            default:
                const error = new Error();
                next(error)


    }
    


    console.log("in res")
    res.send("ur number is " + result);

})
app.use((error, req, res, next) => {



    console.log("in error")
    res.statusCode = 500;
    res.send("error page")


})






