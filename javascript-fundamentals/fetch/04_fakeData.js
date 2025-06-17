const urlData = './data.json';

export async function fakeData() {
    try {
        const allData = await fetch(urlData);
        if (!allData.ok) {
            throw new Error("ki somossa ");
        }
        console.log(allData);
        const result = await allData.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}