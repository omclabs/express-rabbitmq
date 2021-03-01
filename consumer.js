require("dotenv/config");
const amqp = require("amqplib");
const chName = "learning";
const logger = require("./config/logger");

listenForResults();

async function listenForResults() {
    let connString = `amqp://${process.env.RABBIT_USER}:${process.env.RABBIT_PASSWORD}@${process.env.RABBIT_HOST}:${process.env.RABBIT_PORT}`;
    let connection = await amqp.connect(connString);
    let channel = await connection.createChannel();
    await channel.prefetch(1);

    await consume({ connection, channel });
}

function consume({ connection, channel}) {
    return new Promise((resolve, reject) => {
        channel.consume(chName, async function (msg) {
            let msgBody = msg.content.toString();
            let data = JSON.parse(msgBody);
            logger.info({message: `Processing message: ${data.message}`});
            await channel.ack(msg);
        });

        connection.on("close", (err) => {
            return reject(err);
        });
  
        connection.on("error", (err) => {
            return reject(err);
        });
    });
};

