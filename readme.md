Steps to run the code:

Start the Zoopkeeper with below command
docker run -p 2181:2181 zookeeper

Start Kafka container and expose port 9092 and setup environment variables
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka

1. Run node admin.js - this will create the topics and the partitions in that topic.
2. Run consumer.js with a groupname for given consumer to be a part of - npm consumer.js groupname
3. Run producer.js in a separate terminal and keep adding the data into it, which consumer will be able to see