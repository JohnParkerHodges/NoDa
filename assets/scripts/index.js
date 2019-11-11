fs = require("fs");
inq = require("inquirer");

inq.prompt([{
        type: "input",
        message: "what is your GitHub username?",
        name: "userGitHubUser",
    },


    {
        type: "list",
        message: "what is your favorite color",
        choices: ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"],
        name: "userColor",

    }
]).then(function(response) {
    fs.writeFile(response.name + ".json", JSON.stringify(response, null, 4), function(err) {
        if (err) {
            console.log(err)
        }
        console.log("done")
    })

})