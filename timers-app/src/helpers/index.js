export function newTimer(attrs = {}) {
    const timer = {
        // id: crypto.randomUUID(),
        id: Math.round(Math.random() * 1000),
        title: attrs.title || "Timer",
        project: attrs.project || "Project",
        elapsed: attrs.elapsed || 0,
    };

    return timer;
}

export function renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;

    if (runningSince) {
        totalElapsed += Date.now() - runningSince;
    }

    return millisecondsToHuman(totalElapsed);
}

export function millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
        pad(hours.toString(), 2),
        pad(minutes.toString(), 2),
        pad(seconds.toString(), 2),
    ].join(":");

    return humanized;
}

export function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
}
