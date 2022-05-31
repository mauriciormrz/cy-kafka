const oracledb = require('oracledb');

async function run() {

  let connection;

  try {

    connection = await oracledb.getConnection({ user: "cmsuser", password: "WychekEs8#Stasck", connectionString: "oracln.yleo.us:1521/ylcln.yleo.us" });
    //conn = await oracledb.getConnection(dbconfig);
    console.log("Successfully connected to Oracle Database");

    // Create a table
/*
    await connection.execute(`begin
                                execute immediate 'drop table todoitem';
                                exception when others then if sqlcode <> -942 then raise; end if;
                              end;`);

    await connection.execute(`create table todoitem (
                                id number generated always as identity,
                                description varchar2(4000),
                                creation_ts timestamp with time zone default current_timestamp,
                                done number(1,0),
                                primary key (id))`);

    // Insert some data
*/
    const query = `INSERT INTO cmsuser.CustomerChangeQueue (recordid) VALUES (476033)`;
/*
    const rows =
          [ ["Task 1", 0 ],
            ["Task 2", 0 ],
            ["Task 3", 1 ],
            ["Task 4", 0 ],
            ["Task 5", 1 ] ];
*/
 //   let result = await connection.executeMany(sql, rows);
    let result = await connection.execute(query)

    console.log(result.rowsAffected, "Rows Inserted");

    connection.commit();

    // Now query the rows back
/*
    result = await connection.execute(
      `select description, done from todoitem`,
      [],
      { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });

    const rs = result.resultSet;
    let row;

    while ((row = await rs.getRow())) {
      if (row.DONE)
        console.log(row.DESCRIPTION, "is done");
      else
        console.log(row.DESCRIPTION, "is NOT done");
    }

    await rs.close();
*/
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();