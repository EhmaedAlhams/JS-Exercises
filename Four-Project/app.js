// SECTION: Fetch API and practice. 

let InputValue = document.querySelector('.input');
let btn = document.querySelector('.btn');
let FetchData = document.querySelector('.data-fetch');


btn.onclick = function () { 
    if (InputValue.value == "") {
        FetchData.innerHTML = "<span>No Data</span>"
    
    } else {
        fetch(`https://api.github.com/users/${InputValue.value}/repos`)
            .then((response) => response.json())

            .then(function (repositories) {
                // console.log(data);
                FetchData.innerHTML = ``;
                repositories.forEach(element => {
                    // let count = 0;
                    let Dev = document.createElement('div');
                    //TODO: count repositories.
                    let Text = document.createTextNode(`${element.name}`)
                    Dev.appendChild(Text);

                    let href = document.createElement('a');
                    let TextHref = document.createTextNode('Visit');
                    href.appendChild(TextHref);

                    
                    href.href = `https://github.com/${InputValue.value}/${element.name}`
                    href.setAttribute('target', "_blank");
                    Dev.appendChild(href)

                    let Projects = document.createElement('span');
                    let TextProjects = document.createTextNode(element.has_projects);
                    Projects.appendChild(TextProjects);
                    Dev.appendChild(Projects);

                    let Description = document.createElement('div');
                    let TextDescription = document.createTextNode(element.description)
                    Description.className = "description";
                    Description.appendChild(TextDescription);
                    Dev.appendChild(Description);

                    Dev.className = 'fetch-box';
                    FetchData.appendChild(Dev);
                });
            });
    }
};