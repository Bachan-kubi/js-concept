// index.js
export function setupFormSubmitHandler() {
    const formPart = document.getElementById('formPart');

    formPart.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            let data = await fetch('./data.json', {
                method: "POST",
                body: new FormData(formPart)
            });
            let res = await data.text();
            alert(res);
        } catch (error) {
            console.log(error);
        }
    });
}
