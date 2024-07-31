const { kafka } = require("./client"); // this is importing the client.js file's kafka package

// admin is like one time setup thing, creating topics and partitions for those topics

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Admin connection success");

    console.log("Creating Topic [rider-updates]");
    await admin.createTopics({
        // topics is an array here
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ],
    });
    console.log("Topic is created successfully [rider-updates]");

    console.log("Disconnecting Admin...");
    await admin.disconnect();
}

init(); // calling the init function