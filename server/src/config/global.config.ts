import {configDotenv} from 'dotenv';

const inProduction = process.env.NODE_ENV === 'production';

if (!inProduction) configDotenv();

const dbUrl = process.env.ATLAS_URL!;
const dbName = 'todo';

export {inProduction, dbUrl, dbName};
