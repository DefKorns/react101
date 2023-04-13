const baseUrl = 'https://timers.reativ.dev';

export function getTimers(success) {
    return fetch(`${baseUrl}/api/timers`)
        .then(checkStatus)
        .then(parseJson)
        .then(success)
}

export function createTimer(data) {
    return fetch(`${baseUrl}/api/timers`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus);
}

export function updateTimer(data) {
    return fetch(`${baseUrl}/api/timers`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus);
}

export function deleteTimer(data) {
    return fetch(`${baseUrl}/api/timers`, {
        method: 'delete',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus);
}

export function startTimer(data) {
    return fetch(`${baseUrl}/api/timers/start`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus);
}

export function stopTimer(data) {
    return fetch(`${baseUrl}/api/timers/stop`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(checkStatus);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;

    console.log(error);

    throw error;
}

function parseJson(response) {
    return response.json();
}

const api = {
    getTimers,
    createTimer,
    updateTimer,
    deleteTimer,
    startTimer,
    stopTimer
};

export default api;