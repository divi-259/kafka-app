https://learn.piyushgarg.dev/learn/kafka-crash-course 

Kafka is an open source distributed event streaming platform which collects, processes and stores the streaming data in real time.

Examples - Food delivery app showing real time location, Uber or Ola showing real time driver location and updates, Discord server managing thousands of users all at once.

Kafka is not an alternate for database.

Storage for kafka is very low, but throughput is high, just the opposite of the database. 

We can not query kafka for millions of data just like in Database. 

Kafka and Database can be used together to get the best of both worlds. 

- The producers services keep pushing the raw data that generate into the kafka
- Consumer services use kafka and then do some calculations on the raw data and then bulk insert the data in the database, which can take some time but it does not matter to the end user.
- Kafka has topics → And topics have partitions → based on some logic we will push the data onto that partition.
- There is concept of auto balancing for consumers in kafka. If there are more consumers than the partition, the extra consumers are going to be idle as they do not have anything to consume.

Consumer Groups: 

We can have different consumer groups, and the concept of self balancing is applicable inside a consumer group. 

Queue vs Pubsub: Queue has one producer and one consumer. pubsub has one producer and multiple consumers. For example RabbitMQ and SQS both are a queue system. 

Kafka can work both as Queue and pubsub by tweaking things little bit.

If number of partitions = number of consumers - then kafka would work like a queue. 1:1 mapping for one partition to one consumer. 

If we have more consumer groups, then it will work like a pub sub.