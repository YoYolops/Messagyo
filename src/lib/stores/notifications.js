import { writable } from "svelte/store";

export const notifications = writable([]);

export function notify(errorObject) {
    notifications.update(prev => [errorObject, ...prev])
    setTimeout(removeNotification, 2500)
}

function removeNotification() {
    notifications.update(currentState => {
        currentState.shift()
        return currentState
    })
}