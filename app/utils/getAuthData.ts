import { readFileSync } from 'fs';
import { join } from 'path';

//import * as fs from 'fs';

export function getAuthData() {
  const filePath = join(__dirname, '../../login-data.json');
  const rawData = readFileSync(filePath);
  const jsonData = JSON.parse(rawData.toString());

  return {
    email: jsonData.email as string,
    password: jsonData.password as string,
  };
}
