import mongoose from "mongoose";
import { UserSchema } from "../models/user.schema.js";

class UserServices {
  constructor() {
    this.model = mongoose.model("User", UserSchema);
  }

  async getUsers() {
    try {
      const users = await this.model.find({});
      return users;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getUser(user) {

    try {
      const foundedUser = await this.model.findOne(user);
      return foundedUser;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async createUser(user) {
    try {
      const newUser = await this.model.create(user);
      return newUser;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default UserServices;
