import { Router } from "express";
import 'dotenv/config'

import path from 'path';
import {fileURLToPath} from 'url';
import  Banner from './database/get-banner-data.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const router = Router();
const c = console;



export default router;

