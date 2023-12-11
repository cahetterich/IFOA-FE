const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://api.pexels.com/v1';

async function search(query) {
    try {
        const response = await axios.get(`${BASE_URL}/search?query=${query}`, {
            headers: { Authorization: API_KEY }
        });
        return response.data.photos;
    } catch (error) {
        console.error('Error searching images:', error);
        return [];
    }
}

function renderResults(photos) {
    const results = document.getElementById('results');
    results.innerHTML = '';
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${photo.src.small}" alt="${photo.photographer}">
            <h2>${photo.photographer}</h2>
            <button>View</button>
        `;
        div.querySelector('button').addEventListener('click', () => {
            window.open(photo.src.original, '_blank');
        });
        results.appendChild(div);
    });
}

document.getElementById('load').addEventListener('click', async () => {
    const query = document.getElementById('search').value;
    const photos = await search(query);
    renderResults(photos);
});