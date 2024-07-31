const { kafka } = require("./client");
const group = process.argv[2];

async function init() {
  const consumer = kafka.consumer({ groupId: group }); // we need to provide group id to this consumer
  await consumer.connect();

  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true }); // consumer is subscribing to the topic

  await consumer.run({ 
    // for each message we have an async function which we run
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `${group}: [${topic}]: PART:${partition}:`,
        message.value.toString()
      );
    },
  });

  // we can disconnect the consumer as well
  //await consumer.disconnect();
}

init();