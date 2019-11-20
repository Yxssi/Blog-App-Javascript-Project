function afficher_Article() {
    fetch("http://localhost:3000/articles")
        .then(r => r.json())
        .then(data => {
            console.log(data);
            console.log(data.length);

            for (let i = 1; i < data.length + 2; i++) {
                let m = i - 1

                document.getElementById(i).innerText = data[m].titre + " écrit par  " + data[m].auteur

            }

        });

}



afficher_Article();