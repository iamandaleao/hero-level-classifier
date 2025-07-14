createStringConnection("db_products", "camisa", "1212");

function createStringConnection(databaseName, user, pass) {
  console.log(`connect: DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`);
}
