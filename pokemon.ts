import util from "util";
// import axios from "axios";
import typeData from "./data/type-data.json"
import prompts from "prompts"

interface choice {
    title: string
    value: string
}

function typeIntersection(array1: any[], array2: any[]): any[] {
    return array1.filter(item => array2.includes(item));
}

const weak = typeIntersection(typeData.Fighting.Strengths, typeData.Fire.Strengths);
console.log(util.format("%o\n", weak));


(async () => {
    let reiterate = true;
    while (reiterate) {
        let choices:choice[] = [];

        Object.keys(typeData).forEach((key) => {
            choices.push({title: key, value: key});
        });
    
        // Prompt to select a type
        const chooseType = await prompts([
            {
                type: 'select',
                name: 'type',
                message: 'Pick type',
                choices: choices,
            }
        ]);
        
        // Prompt to select another
        const includeSecondType = await prompts([
            {
                type: 'confirm',
                name: 'incsecond',
                message: 'Dual type?'
            }
        ])

        if (includeSecondType.incsecond) {
            // Prompt to select a type
            const chooseSecondType = await prompts([
                {
                    type: 'select',
                    name: 'type',
                    message: 'Pick type',
                    choices: choices,
                }
            ]);
        }

        // Show data for that type
        if (chooseType.type !== undefined) {
            console.log(`Selected type: \x1b[1m${chooseType.type}\x1b[0m`);
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