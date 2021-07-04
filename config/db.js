const Pool = require('pg').Pool;

    const pool = new Pool({
        host: process.env.REACT_APP_HOST,
        user: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_PWORD,
        database: process.env.REACT_APP_DBASE,
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