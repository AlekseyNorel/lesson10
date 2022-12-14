const mainArr = [
    {
        name:'Kobzar',
        author:'Taras Shevchenko',
        genre:'Poetry',
        year:1840,
    },
    {
        name:'Zapovit',
        author:'Taras Shevchenko',
        genre:'Poetry',
        year:1859,
    },
    {
        name:'Dumka',
        author:'Taras Shevchenko',
        genre:'Poetry',
        year:1841,
    },
    {
        name:'Nochnoi dozor',
        author:'Sergei Lukyanenko',
        genre:'Fantastic',
        year:1998,
    },
    {
        name:'Dnevnoi dozor',
        author:'Sergei Lukyanenko',
        genre:'Fantastic',
        year:2000,
    },
    {
        name:'Spectr',
        author:'Sergei Lukyanenko',
        genre:'Fantastic',
        year:2002,
    },
    {
        name:'The Sun Also Rises',
        author:'Ernest Hemingway',
        genre:'Novel',
        year:1926,
    },
    {
        name:'Three Stories & Ten Poems',
        author:'Ernest Hemingway',
        genre:'Poetry',
        year:1923,
    },
    {
        name:'Ernest Hemingway : the Man and His Work',
        author:'Ernest Hemingway',
        genre:'Critical studies',
        year:1950,
    },
    {
        name:'The Old Man and the Sea',
        author:'Ernest Hemingway',
        genre:'Novel',
        year:1952,
    },
];

console.log('Abowe 2000 year',mainArr.filter(year => year.year >= 2000).map(name=>name.name));
console.log('Bellow 2000 year',mainArr.filter(year => year.year < 2000).map(name=>name.name));
console.log(mainArr.filter(book=>book.genre==='Poetry').map(name=>name.name.toUpperCase()));