var path = window.location.search;
var url = path
// 
console.log(url[4])






function afficher_ArticleEtSonContenu() {

    fetch("http://localhost:3000/article/" + url[4]) // Va récupérer les données de l'article sur lequel on a cliqué dans le serveur 
        .then(r => r.json())
        .then(data => {
            document.getElementById('titreArticle').innerText = data.titre
            document.getElementById('auteurArticle').innerText = data.auteur
            document.getElementById('contenu').innerText = data.txt



        });

}




afficher_ArticleEtSonContenu();