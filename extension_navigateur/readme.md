# Web Scraper

Webscraping product’s information from an Amazon’s URL. Copy the Product’s URL when you call the function and it will return the Image URL, Product Title and Price.



## Usage

``` javascript
scrapeProduct('https://www.amazon.fr/FEMMES-RACE-CLASSE-ANGELA-DAVIS/dp/B01B98N7YC/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=angela+davis&qid=1591194288&sr=8-1');
// returns {
  imgURL: 'https://images-na.ssl-images-amazon.com/images/I/41XV83c2vDL._SX340_BO1,204,203,200_.jpg',
  title: '\n' +
    '                Les Origines du totalitarisme, suivi de Eichmann à Jérusalem\n' +
    '            ',
  price: '36,00 €'
}

scrapeProduct('https://www.amazon.fr/Origines-totalitarisme-suivi-Eichmann-J%C3%A9rusalem/dp/2070758044/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=hannah+arendt&qid=1591195843&sr=8-1');
// returns {
  imgURL: 'https://images-na.ssl-images-amazon.com/images/I/51ZG7xgcQxL._SX353_BO1,204,203,200_.jpg',
  title: '\n                FEMMES, RACE ET CLASSE, N.E. by ANGELA DAVIS\n            ',
  price: '47,38 €'
}

```