const credentials = btoa('srpwcqp2:ej7s62xt2mrtefkqrepm');

export async function getUsers() {
    try {
        const response = await fetch('https://sheetdb.io/api/v1/smyv5xfvpjqeh', {
            headers: {
                'Authorization': 'Basic ' + credentials,
            },
        });

        return await response.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}