"use script"

var movies = [{
        id: 1,
        title: 'Django Unchained',
        desc: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner,',
        image: "images/django.jpg",
    },
    {
        id: 2,
        title: 'Shutter Island',
        desc: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
        image: "images/shutter.jpg",
    },
    {
        id: 3,
        title: 'Inglourious Basterds',
        desc: 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owners vengeful plan for the same.',
        image: "images/bastards.jpg",
    },
    {
        id: 4,
        title: 'Intouchables',
        desc: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',
        image: "images/intouchables.jpg"
    }, {
        id: 5,
        title: 'Pulp Fiction',
        desc: 'The lives of two mob hitmen, a boxer, a gangsters wife and a pair of diner bandits intertwine in four tales of violence and redemption.',
        image: "images/pulp.jpg"
    }
];

var MovieTitle = React.createClass({
    propTypes: {
        movie: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('h2', {}, this.props.movie)
        );
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        );
    }
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('img', {
                src: this.props.image
            }, )
        );
    }
});

var MoviesList = React.createClass({
    propTypes: {
        list: React.PropTypes.array.isRequired,
    },
    render: function () {
        var moviesElements = this.props.list.map(function (movie) {
            return (
                React.createElement(Movie, {
                    movie: movie,
                    key: movie.id
                })
            )
        });
        return (
            React.createElement('ul', {}, moviesElements)
        )
    }
})


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement("Movie", {
                    key: this.props.movie.id
                },
                React.createElement(MovieTitle, {
                    movie: this.props.movie.title
                }),
                React.createElement(MovieDescription, {
                    desc: this.props.movie.desc
                }),
                React.createElement(MovieImage, {
                    image: this.props.movie.image
                })
            )
        );
    }
});

//Za pomocą metody createElement tworzymy obiekt, który w Reakcie nazywa się ReactElement. Metoda ta przyjmuje trzy parametry:
//nazwę klasy, na podstawie której ma zostać stworzony element,
//propsy, czyli właściwości danego elementu (wejścia),
//dzieci elementu, czyli to, co ma się znaleźć wewnątrz. Może to być zarówno tekst, jak i kolejny ReactElement.

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MoviesList, {
            list: movies
        })
    );

//Za pomocą metody createElement tworzymy obiekt
ReactDOM.render(element, document.getElementById('app')); //mamy już gotowy element, możemy wyrenderować go w odpowiednim miejscu w drzewie DOM. Tym właśnie zajmuje się metoda render, która jako parametry przyjmuje: ReactElement (np. ten który stworzyliśmy linijkę wyżej),węzeł drzewa DOM, do którego element ma się "wpiąć".