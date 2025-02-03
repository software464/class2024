import connect from'connect';
const app=connect();
app.listen(8080);
app.use((req,res,next)=>{
    res.setHeader('content-type','text/html');
    next();

});
app.use('/index.html',(req,res,next)=>{
    res.write('<h1>Hello from connect this is index </h1>');
    next();

})
app.use('/about.html',(req,res,next)=>{
    res.write('<h2>Hello from connect this is about </h2>');
    next();

});
app.use((req,res,next)=>{
    res.write('<h4>404-page not found</h4>');
    next();

});
app.use((req,res,next)=>{
    res.end('<h5>copyright &copy A2ztrading 2025</h5>');
    

})
