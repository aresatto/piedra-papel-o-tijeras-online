"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RTDB = exports.DATA_BASE = void 0;
const admin = require("firebase-admin");
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();
const serviceAccount = JSON.parse(fs.readFileSync('firebase-key.json', 'utf8'));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://piedra-papel-o-tijeras-97acf-default-rtdb.firebaseio.com',
});
const DATA_BASE = admin.firestore();
exports.DATA_BASE = DATA_BASE;
const RTDB = admin.database();
exports.RTDB = RTDB;
