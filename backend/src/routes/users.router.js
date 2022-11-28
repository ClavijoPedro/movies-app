import {Router} from 'express';
import { getUsers, postUsers } from '../controllers/users.controller.js';

const users = new Router();

users.get('/', getUsers)
users.post('/', postUsers)

export default users