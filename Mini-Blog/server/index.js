const express = require("express");
const app = express();
const port = 3000;
let cors = require("cors");

const articles = [{
        id: "1",
        titre: "Javascript Vs Typescript : Quelles différences ?",
        auteur: "Yessi Munguengui",
        txt: "Nunc id euismod turpis. Curabitur eu scelerisque massa, sit amet imperdiet mauris. Quisque ultrices, leo sed mattis commodo, nulla massa fringilla est, vitae euismod dui risus vel nibh. In nec consectetur urna. Etiam elementum, massa sit amet scelerisque aliquam, mi libero euismod tortor, id semper arcu neque ultricies velit. In lobortis blandit sem, quis interdum lectus. Mauris maximus ex facilisis nulla pellentesque dignissim. Ut ultrices nulla et est varius vulputate. Suspendisse venenatis lacus in risus posuere vestibulum. Praesent eu dictum mauris, vitae sollicitudin nisi. Quisque vel gravida augue. Vestibulum lacinia ex sit amet sem cursus, sit amet posuere lorem aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum convallis ac velit nec elementum"
    },
    {
        id: "2",
        titre: "Quelles sont les langages préférés des développeurs Nantais ?",
        auteur: "Yessi Munguengui",
        txt: "Sed dapibus metus ac libero rutrum, eget imperdiet felis cursus. Vestibulum nec bibendum purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vehicula hendrerit condimentum. Ut malesuada nec eros sit amet eleifend. Donec dictum odio augue, non pretium ipsum ornare a. Duis pretium pharetra lacinia. Duis id nulla velit. Aliquam enim nunc, suscipit a convallis commodo, condimentum in elit."
    },
    {
        id: "3",
        titre: "Facebook Pay : futur grand du E-Commerce ? ",
        auteur: "Yessi Munguengui",
        txt: "Nullam dictum nisl risus, quis tincidunt elit vulputate iaculis. Donec luctus semper fermentum. In non magna nec sem bibendum ullamcorper non eget dui. Etiam non tortor nec risus condimentum semper in sit amet orci. Quisque eleifend sollicitudin neque vel pharetra"
    },
    {
        id: "4",
        titre: "Retour sur une des plus grandes cyberattack de l'histoire",
        auteur: "Yessi Munguengui",
        txt: "Nulla tempor elit vel justo gravida euismod. Donec cursus neque eget odio facilisis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed magna leo, egestas at scelerisque at, blandit sit amet eros. Fusce vestibulum diam libero, ut congue justo volutpat in. Nam eget lacus at dui vehicula aliquet. Donec eget ipsum libero. Cras finibus libero interdum, elementum lacus eu, consequat nulla. Cras vel sapien quis leo iaculis ullamcorper ut ac justo. Pellentesque mollis posuere neque, in facilisis odio rhoncus eu"
    },
    {
        id: "5",
        titre: "Les objets connectés sont-ils des pains bénis pour les hackeurs ? ",
        auteur: "Yessi Munguengui",
        txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat consequat orci, ut accumsan magna sodales nec. Nulla facilisi. Proin vulputate sagittis sapien id fringilla. Pellentesque at magna ipsum. In porttitor mollis porttitor. Ut cursus porta metus ut sodales. Duis mauris risus, mattis eget arcu at, commodo vulputate sapien. Proin sit amet viverra orci, in elementum leo. In laoreet tellus non odio pellentesque gravida. Nullam scelerisque eros tortor. Curabitur quis interdum magna. Integer vitae nisi rutrum amet"
    }
];

app.use(cors());
app.use(express.json());

// Récupération des blog

app.get("/article/:id", (req, res) => {
    console.log(req.params.id);
    const article = articles.find(a => a.id == req.params.id);

    res.json(article);
});

// recuperer tous les articles

app.get("/articles", (req, res) => {
    res.json(articles);
});
// port sur écoute ok

app.listen(port, () => console.log(`Example app listening on port ${port}!`));