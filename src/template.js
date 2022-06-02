const special = teamData => {
    if (teamData.officeNumber) {
        return `Office Number: ${teamData.officeNumber}`
    }
    if (teamData.school) {
        return `School: ${teamData.school}`
    }
    if (teamData.github) {
        return `Github: <a href="https://github.com/${teamData.github}">https://github.com/${teamData.github}</a>`
    } else {
        return `</br>`;
    }
};

const generateCards = teamData => {
    if (!teamData) {
        return '';
    }

    return `
        <div class="container-fluid justify-content-center">
            <div class="row justify-content-center">
                ${teamData.map((team) => {
            return `
                <div class="card text-white bg-primary mb-3 mb-3 employees text-center p-4" style="max-width: 15rem;">
                    <h3>${team.getName()}</h3>
                    <h5>${team.getRole()}</h5>
                    <ul class="list-group p-4 text-dark">
                        <li class="list-group-item text-left">${team.getId()}</li>
                        <li class="list-group-item text-left">Email: <a href="mailto:https://${team.getEmail()}">${team.getEmail()}</a></li>
                        <li class="list-group-item text-left">${special(team)}</li>
                    </ul>
                </div>
    `
    }).join('')}
            </div>
        </div>  
    `
}
module.exports = teamData => {

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css" />
            <title>My Team</title>
        </head>
        <body>
            <nav class="navbar navbar-dark bg-danger">
                <div class="container-fluid justify-content-center">
                <span class="navbar-brand mb-0 h1">My Team</span>
                </div>
            </nav>  
            <main>
                ${generateCards(teamData)}
            </main>
        </body>                   
        </html>
    `;
};