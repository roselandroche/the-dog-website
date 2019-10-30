export default function(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hurray')
        }, seconds * 1000)
    })
}