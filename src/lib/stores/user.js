import { writable } from "svelte/store";

export const user = writable(getLocalStorageUserData());

export function updateUserData(newData) {
    user.update(prev => {
        const updatedData = {
            ...prev,
            ...newData
        }
        updateLocalStoragedUserData(updatedData)
        return updatedData;
    })
    return user;
}

function getLocalStorageUserData() {
    console.log("GETTING USER DATA")
    const storagedUserData = JSON.parse(localStorage.getItem("userData"))
    console.log("Storaged data: ", storagedUserData)
    return storagedUserData
}

function updateLocalStoragedUserData(newUserData) {
    localStorage.setItem("userData", JSON.stringify(newUserData))
}