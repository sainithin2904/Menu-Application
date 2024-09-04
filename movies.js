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
    ge: {
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
    sp: {
        home: "Inicio",
        movies: "Películas",
        tvshows: "Programas de TV",
        sports: "Deportes",
        live: "En vivo",
    },
    ch: {
        home: "首页",
        movies: "电影",
        tvshows: "电视剧",
        sports: "体育",
        live: "直播",
    }
};

const images = {
    home: "https://th.bing.com/th/id/OIP._p63mRQY7D2NzQ1xeF8unAAAAA?rs=1&pid=ImgDetMain",
    movies: "https://wallpapercave.com/wp/wp1945939.jpg",
    tvshows: "https://www.popoptiq.com/wp-content/uploads/2019/05/tv-shows-may272019-min-768x512.jpg",
    sports: "https://images.saymedia-content.com/.image/t_share/MTk5OTQ0OTE5Mjc0NDk3MTI3/types-of-cricket-matches.jpg",
    live: "https://img.freepik.com/free-vector/live-neon-sign-light-banner-vector-illustration_77399-1334.jpg?size=338&ext=jpg",
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
