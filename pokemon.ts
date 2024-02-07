import prompts from "prompts"
import { readDataFile } from './setup/load-data'

interface Types {
    [type: string]: TypeData;
}

interface TypeData {
    Immunities: Array<string>
    Strengths: Array<string>
    Weaknesses: Array<string>
}

let typeData: Types;

// Load Type Data
readDataFile('./data/type-data.json').then((content) => {
        typeData = JSON.parse(content);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    main();
})


interface choice {
    title: string
    value: string
}

function main() {
    (async () => {
        let reiterate: boolean = true;
        
        // Populate choices
        let choices:choice[] = [];
        Object.keys(typeData).forEach((key) => {
            choices.push({title: key, value: key});
        });

        while (reiterate) {        
            // Prompt to select a type
            const chooseType = await prompts([
                {
                    type: 'select',
                    name: 'type',
                    message: 'Pick type',
                    choices: choices,
                }
            ]);

            // Show data for that type
            if (chooseType.type !== undefined) {
                console.log(`\nSelected type: \x1b[1m${chooseType.type}\x1b[0m`);
                console.log(`\x1b[32mStrong against\x1b[0m: ${typeData[chooseType.type].Strengths}`);
                console.log(`\x1b[31mWeak to\x1b[0m: ${typeData[chooseType.type].Weaknesses}`);
                if (!typeData[chooseType.type].Immunities.includes("None")) {
                    console.log(`\x1b[95mImmunities\x1b[0m: ${typeData[chooseType.type].Immunities}`);
                }
                console.log("\n");
            }
            
            
            // Prompt to select another
            const chooseReiterate = await prompts([
                {
                    type: 'confirm',
                    name: 'reiterate',
                    message: 'Select another?'
                }
            ])
            if (!chooseReiterate.reiterate) { reiterate = false }
            // Clear console
            console.log("\x1Bc");
        }
    })();
}



