const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function init() {
    const producer = kafka.producer();
  
    console.log("Connecting Producer");
    await producer.connect();
    console.log("Producer Connected Successfully");
  
    rl.setPrompt("> ");
    rl.prompt();
  
    rl.on("line", async function (line) {
      const [riderName, location] = line.split(" ");
      await producer.send({ // with this function we are sending the message to the topic that we created in admin.js
        topic: "rider-updates",
        messages: [
          {
            partition: location.toLowerCase() === "north" ? 0 : 1, // selecting partition based on the location
            key: "location-update",
            value: JSON.stringify({ name: riderName, location }),
          },
        ],
      });
    }).on("close", async () => {
      await producer.disconnect();
    });
  }
  
  init();