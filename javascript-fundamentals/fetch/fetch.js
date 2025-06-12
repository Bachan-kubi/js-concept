
const allData = fetch('https://jsonplaceholder.typicode.com/photos')

allData
.then(data=>data.json())
// .then(finalData=>console.log(finalData));
.then(finalData=>displayData(finalData));

function displayData(photos) {
    const namesDiv = document.getElementById('names');
    if (!namesDiv) {
        console.error("Element with ID 'names' not found.");
        return;
    }
    namesDiv.innerHTML = photos
        .slice(0, 10)
        .map(photo => `
            <div style="margin: 10px;">
                <img src="${photo.url}" alt="${photo.title}">
                <h3>${photo.title}</h3>
            </div>
        `).join('')
}
