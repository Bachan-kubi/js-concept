fetch('https://jsonplaceholder.typicode.com/posts')
.then(x=>x.json())
.then(y=>console.log(y))

const allData = fetch('https://jsonplaceholder.typicode.com/photos')
.then(data=>data.json())
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
                <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                <p>${photo.title}</p>
            </div>
        `)
        .join('');
}
