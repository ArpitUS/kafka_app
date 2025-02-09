const { kafka } = require('./client');  // Correct import

async function init() {
    const admin = kafka.admin();
    console.log('Admin connecting...');
    await admin.connect();
    console.log('Success! Admin connected...');

    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ],     
    });

    console.log("Topic Created Success [rider-updates]");

    console.log("Disconnecting Admin...");
    await admin.disconnect();
}

init();
