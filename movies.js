const menuItems = {
    en: {
        home: "Home",
        movies: "Movies",
        tvshows: "TV Shows",
        sports: "Sports",
        live: "Live",
    },
    fr: {
        home: "Accueil",
        movies: "Films",
        tvshows: "Séries TV",
        sports: "Sports",
        live: "En direct",
    },
    de: {
        home: "Startseite",
        movies: "Filme",
        tvshows: "TV-Sendungen",
        sports: "Sport",
        live: "Live",
    },
    ru: {
        home: "Дом",
        movies: "Фильмы",
        tvshows: "ТВ-шоу",
        sports: "Спорт",
        live: "Живое",
    },
    es: {
        home: "Inicio",
        movies: "Películas",
        tvshows: "Programas de TV",
        sports: "Deportes",
        live: "En vivo",
    },
    zh: {
        home: "首页",
        movies: "电影",
        tvshows: "电视剧",
        sports: "体育",
        live: "直播",
    }
};

const images = {
    home: "images/home.jpg",
    movies: "images/movies.jpg",
    tvshows: "images/tvshows.jpeg",
    sports: "images/sports.jpg",
    live: "images/live.jpeg",
};

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const contentImage = document.getElementById('background-image');
    const languageSelect = document.getElementById('language');
    
    function updateMenuLanguage(language) {
        const items = menu.querySelectorAll('li');
        items.forEach(item => {
            const key = item.getAttribute('data-key');
            item.textContent = menuItems[language][key];
        });
    }

    function updateContentImage(menuKey) {
        contentImage.src = images[menuKey];
    }

    menu.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const key = event.target.getAttribute('data-key');
            updateContentImage(key);
        }
    });

    languageSelect.addEventListener('change', (event) => {
        updateMenuLanguage(event.target.value);
    });

    // Initialize with default language
    updateMenuLanguage('en');
});
