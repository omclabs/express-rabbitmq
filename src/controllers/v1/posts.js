const amqp = require("amqplib");
const helpers = require("../../utils/helpers");
const chName = 'learning'

exports.postMessage = async (req, res, next) => {
    try {
        let message = {
            "message": req.body.message 
        };
        let connString = `amqp://${process.env.RABBIT_USER}:${process.env.RABBIT_PASSWORD}@${process.env.RABBIT_HOST}:${process.env.RABBIT_PORT}`;
        let connection = await amqp.connect(connString);
        let channel = await connection.createChannel();
        let result = await channel.assertQueue(chName);
        channel.sendToQueue(chName, Buffer.from(JSON.stringify(message)), {persistent: true});

        res.status(201);
        res.json(helpers.formatReturn("success", 201, {}, ""));    
    }catch(err){
        error = new Error('Error')
        error.status = 500;
        error.message = err.message;
        next(error);
    }
};
