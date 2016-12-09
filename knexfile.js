module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: "./mydb.sqlite"
		}
  },

  test: {
		client: 'sqlite3',
		connection: {
			filename: "./test.sqlite"
		}
  }
}