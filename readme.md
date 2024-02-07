# Terminal-based Pokemon Tool

I am constantly forgetting the strengths, weaknesses and immunities of the many Pokemon types whilst playing through the games.

As I almost always have a laptop in front of me whist playing I decided to write an easy-to-use tool for myself which prompts for the Pokemon type I want the matchups for.

Prior to writing this tool I would often resort to a quick Google search to find the answer ("Dragon type weaknesses") which would either result in the slightly different matchups for Pokemon Go, or be incorrect/incomplete.

## How to Use

This tool is a `ts-node` application. If you're familiar with `ts-node` and have already cloned the repo simply run `npm start` in the application directory to get going.

### Prerequisites

Before running the application, ensure you have the following installed, I use [Brew](https://docs.brew.sh/Installation) on Mac and [Chocolatey](https://chocolatey.org/install) on Windows
:

**Node JS:**

Windows: `choco install nodejs.install`

Mac: `brew install node`

### How to Run

1. Clone the repository to your local machine
2. Navigate to the directory in your terminal of choice.
3. Install dependencies: `npm install`
4. Run the tool: `npm start`

### How to Use

Select a type from the pre-populated list using the arrow keys and enter. Upon selecting a Type from the list any strengths, weaknesses and immunities for the chosen type will be listed.

You will then be prompted to select another type or close the tool.

## To-do

1. Generate type matchups for dual-type Pokemon.