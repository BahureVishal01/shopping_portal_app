const app = require('./app')
const serverConfig = require('./configs/server.config')
const router = require('./routes/index');


//////////// ROUTES ///////////////

app.use('/api', router);













app.listen(serverConfig.PORT, ()=>{
    console.log("Application has started on port ", serverConfig.PORT);
});

process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log('shutting down the server due to unhandled Promise rejection');
    server.close(()=>{
        process.exit(1);
    })
})