const { Kafka } = require("kafkajs"); // importing kafka

// creating object, we are exporting this to be used by other files directlty
exports.kafka = new Kafka({
    clientId: "my-app",
    brokers: ["172.23.176.1:9092"], // kafka is running on local machine on port 9092
});
