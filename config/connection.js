const { connect, connection } = require('mongoose');

// Enable strict mode for queries
mongoose.set('strictQuery', true);

// Set the MongoDB connection string
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialMedia';

// Connect to MongoDB using the connection string and options
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export the MongoDB connection object
module.exports = connection;
