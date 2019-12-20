const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer.prompt([
    {
    type: "list",
    message: "what is your favorite color?",
    choices:["Red","Blue","Green","Purple","Yellow","Black","Pink"],
    name: "userColor"
    },
    {
        type:"input",
        message:"What is your GitHub username",
        name: "name"
    },
]).then(response => {
    const name = response.name
    const userColor = response.userColor

axios.get("https://api.github.com/users/" + name).then(results => {
    // console.log(results.data)
    fs.writeFile(name + ".md", 
    `<h1 style="color:${userColor}">${results.data.name}</h1>
    <img src="${results.data.avatar_url}" style="width: 275px; heigh: 275px;">
    <p>Bio: ${results.data.bio}</p>
    <p>Company: ${results.data.company}</p>
    <a href="${results.data.html_url}">${results.data.name}'s Github Homepage</a>
    <p>Public Repos: ${results.data.public_repos}</p>
    <p>Followers: ${results.data.followers}</p>
    <p>Following: ${results.data.following}</p>
    <p>Location: ${results.data.location}</p>`,

    error => {
        if (error) {return error;}
        else {console.log("sucess")}
    }
    )
})
})