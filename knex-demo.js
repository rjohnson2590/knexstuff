var env = process.env.NODE_ENV || 'development';
var knexConfig = require('./knexfile.js')[env];
var knex = require('knex')(knexConfig);
	function work(it){
		console.log(it)
	}

knex.select('*').from('cities').join('countries', {'countries.id': 'cities.id'}).then(work)
//select * from `cities` inner join `countries` on `countries.id` = `cities.id`
// knex('cities').select('*')
  // .then(work);

