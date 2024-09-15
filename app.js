require('dotenv').config(); // Load environment variables from .env file
const { ApolloServer, gql } = require('apollo-server'); // Apollo Server for GraphQL
const mongoose = require('mongoose'); // Mongoose for MongoDB connection

// GraphQL Type Definitions (Schema)
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// GraphQL Resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, BuildTrack!',
  },
};

// Create Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

// Call the connectDB function to connect to MongoDB
connectDB();

// Start the Apollo server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
