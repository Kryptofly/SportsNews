document.getElementById('news-form').addEventListener('submit', function(e) {
    e.preventDefault();
    fetchNews();
});

async function fetchNews() {
    const apiKey = 'YOUR_NEWSAPI_KEY'; // Replace with your NewsAPI key
    const url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    displayNews(data.articles);
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');

        const titleElement = document.createElement('h2');
        titleElement.textContent = article.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = article.description;

        const linkElement = document.createElement('a');
        linkElement.href = article.url;
        linkElement.target = '_blank';
        linkElement.textContent = 'Read more';

        articleElement.appendChild(titleElement);
        articleElement.appendChild(descriptionElement);
        articleElement.appendChild(linkElement);

        newsContainer.appendChild(articleElement);
    });
}
