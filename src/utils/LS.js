const LS = {
    get:(prop) => {
        const value = localStorage.getItem(prop)
        return value
    },
    put:(prop, value) => {
        localStorage.setItem(prop, value)
    },
    delete:(prop) => {
        localStorage.removeItem(prop)
    },
    clear:() => {
        localStorage.clear()
    }
}

export default LS