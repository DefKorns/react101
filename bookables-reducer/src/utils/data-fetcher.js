export function getData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading data!');
            }

            return response.json();
        });
}