/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default;
const dotenvPlugin = require('cypress-dotenv');
const DBManager = require('../helpers/db-manager');
const consume = require('../helpers/kafka-consumer');

/*--------------------------------------------------------*/
//const Kafka = require('node-rdkafka');
//const consumer = Kafka.KafkaConsumer(
//	{
//		'group.id': 'kafka',
//		'metadata.broker.list': 'localhost:9093',
//	},
//	{}
//);

/*--------------------------------------------------------*/

module.exports = (on, config) => {

	config = dotenvPlugin(config);

	on('file:preprocessor', cucumber());

	consume().catch(err => {
		console.error('error in consumer: ', err);
	});

	on('task', {
		sqlQuery: query => {
			console.log(query);
			return DBManager.queryData(query);
		},
	});

	console.clear();
	console.log('Inicio...')

	/*--------------------------------------------------------*/
	//consumer.connect();
	//consumer
	//	.on('ready', () => {
	//		console.log('consumer ready...');
	//		consumer.subscribe(['my-kafka-topic']);
	//		consumer.consume();
	//	}).on('data', data => {
	//		console.log(`received message: ${data.value}`);
	//	});
	/*--------------------------------------------------------*/
	return config;

};
