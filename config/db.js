const Pool = require('pg').Pool;

    const pool = new Pool({
        host: process.env.DBHOST
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DBASE,
    })

    // await pool.connect()
    // await pool.query('select * from businessunit', (err, res) => {
    //     if (err) {
    //         console.log('SELECT pool.query():', err)
    //     }

    //     if (res) {
    //         console.log('SELECT pool.query():', res)
    //     }
    // });

     pool.connect((err, client, release) => {
        if (err) {
          return console.error('Error acquiring client-database', err.stack)
        }
        console.log("Connected to Database!");
        // client.query('SELECT NOW()', (err, result) => {
        //   release()
        //   if (err) {
        //     return console.error('Error executing query', err.stack)
        //   }
        //   console.log(result.rows)
        // })
      })

module.exports = pool;