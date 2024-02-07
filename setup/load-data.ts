// Import the data files
import { promises as fs } from 'fs'

export async function readDataFile(filename: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            const fileContent = await fs.readFile(filename, ({encoding: 'utf-8'}));
            resolve(fileContent); // Resolve with the file content
        }, 1000);
    });
}