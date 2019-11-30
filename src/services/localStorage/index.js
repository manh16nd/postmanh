export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = key => {
    const result = JSON.parse(localStorage.getItem(key))
    
    return result 
}

export const removeLocalStorage = key => {
    localStorage.removeItem(key)
}