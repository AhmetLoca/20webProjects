export function hello() {
    return `hello world`
}

//export default hello
export let sayHi = name => `hello ${name}`

let API_URL = 'https: //api.prototurk.com'

/*Çoklu export*/
export {
    sayHi,
    API_URL
}