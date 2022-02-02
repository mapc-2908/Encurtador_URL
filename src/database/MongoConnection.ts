import mongoose, { mongo } from 'mongoose'
import { config } from '../config/Constants'

export class MongoConnection {
	public async connect(): Promise<void> {

		try {
			// Calling the required MongoDB module.
			const {MongoClient} = require("mongodb");
			//const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";

			const uri = config.MONGODB_URL+config.MONGODB_USERNOME+':'
			+config.MONGODB_USERSENHA+config.MONGODB_HOST+'test?retryWrites=true&w=majority';
			//console.log(uri);

			const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
			await client.connect();
			//await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
			console.log('Database connected')
		} catch (err) {
			console.error(err.message)
			process.exit(1)
		}
	}
}
