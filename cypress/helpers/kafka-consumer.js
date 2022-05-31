const { Kafka, logLevel } = require("kafkajs");
const { writeJSON, readJSON } = require("../helpers/utilities");

const brokers = [process.env.KAFKA_BROKER];

const fs = require("fs");

const clientId = "cy-kafka";
const topic = process.env.TOPIC_PREFIX + ".skava.internal.events.yl-customers";
//const topic = process.env.TOPIC_PREFIX + ".legacy.internal.events.customer-id-changes";

const kafka = new Kafka({
  clientId,
  brokers,
  logLevel: logLevel.NOTHING,
  ssl: {
    rejectUnauthorized: false,
    cert: fs.readFileSync(process.env.SSL_LOCATION, "utf-8"),
  },
  sasl: {
    mechanism: process.env.SASL_MECHANISM,
    username: process.env.SASL_USERNAME,
    password: process.env.SASL_PASSWORD,
  },
});

const consumer = kafka.consumer({
  groupId: clientId,
  minBytes: 5,
  maxBytes: 1e6,
  maxWaitTimeInMs: 3000, // wait for at most 3 seconds before receiving new data
});

const consume = async () => {

  await consumer.connect(); // first, we wait for the client to connect and subscribe to the given topic
  await consumer.subscribe({ topic, fromBeginning: false });

  await consumer.run({
    eachMessage: ({ message }) => {

      // this function is called every time the consumer gets a new message
      console.log({
        key: message.key.toString(),
        value: message.timestamp.toString(),
      })

      try {
        const { messages } = readJSON();
        let userObj = JSON.parse(message.value);
        messages.push(userObj);
        writeJSON(messages);
      } catch (err) {
        console.log(err.message);
      }
    },
  });
};

writeJSON([]);

module.exports = consume;
//INSERT INTO cmsuser.CustomerChangeQueue (recordid) VALUES (5010);
