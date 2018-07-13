import * as express 		from 'express';
import * as mongoose 		from 'mongoose';
import * as bodyParser 		from 'body-parser';
import { config } 			from './config';
import { version } 			from './version';

console.log(`CookBook Server.  ${version}`);

(<any>mongoose).Promise = Promise;

var app = express();
app.listen(config.port, err => {
	console.log('Listening on http://localhost:' + config.port);
});

app.use(bodyParser.json());

if(!config.database || !config.database.server || !config.database.name) throw new Error('Invalid database config!');
mongoose.connect(`mongodb://${config.database.server}/${config.database.name}`);


const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/', (req,res) => {
	res.json({name:'Cook Book', date:Date.now(), version:version, databaseServer:config.database.server, databaseName:config.database.name});
});

import { router as recipeRouter }	from './routers/recipeRouter';

apiRouter.use('/recipe', recipeRouter);
