import { config } from "dotenv";
import MongoStore from "connect-mongo";
config();

export default {
  EXPRESS_SESSION: {
    store: MongoStore.create({
      mongoUrl: process.env.MONGO__URI,
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
    secret: process.env.PRIVATE__KEY,
    saveUninitialized: false,
    rolling: true,
    resave: true,
    cookie: {
      maxAge: parseInt(process.env.SESSION__TIME) || 86400000,
    },
  },
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO__URI,
  PRIVATE_KEY: process.env.PRIVATE__KEY,
};
