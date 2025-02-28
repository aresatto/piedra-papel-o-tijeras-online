import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const config = {
	apiKey: 'AIzaSyCgmBNvqHauM0A68ikDlFsYGCZKBjPSxh8',
	authDomain: 'piedra-papel-o-tijeras-97acf.firebaseapp.com',
	databaseURL: 'https://piedra-papel-o-tijeras-97acf-default-rtdb.firebaseio.com/',
};

const APP = initializeApp(config);
const RTDB = getDatabase(APP);

export { RTDB };
