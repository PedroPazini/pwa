const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const{salvarSeguro, listarSeguros} = require('./seguro-service')

const webpush = require('web-push');

const vapidKeys = {
    publicKey: 'BObNGn1QNzIflVs7JC6VejwfelyHfcmule7g5Wr94BMij_GTbCNhu3S3taAvosQ4B3HNI0_mVvGuczpwqvziVUc',
    privateKey: '5QNEm7Sy7Vg3gdvBvRCrUpA--MncfnZZqxTVcPQ3FpU'}


webpush.setVapidDetails('teste@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);
const app = express();
app.use(bodyParser.json());
app.use(cors({origin:true, credentials: true}));

app.route('/api/seguros').post(salvarSeguro);
app.route('/api/seguros').get(listarSeguros);


const HOST = 'localhost';
const PORT = 9000;

const httpServer = app.listen(PORT, HOST, () => {
    console.log(`sServidor rodando em http://${HOST}:${PORT}`);
})