
const listarRepos = function(repos) {
    let ul = document.querySelector('ul#repos');

    for(i=0; i<5; i++) {
        let li_item = document.createElement('li');
        let p_item = document.createElement('p');

        p_item.innerHTML = `<a>${repos[i].name}</a> - ${repos[i].description}`;

        li_item.appendChild(p_item);
        ul.appendChild(li_item);
    }
}

axios.get('https://api.github.com/users/clesiorods/repos')
    .then((msg) => {
        listarRepos(msg.data);
    })
    .catch((erro) => {
        console.warn(erro);
    });