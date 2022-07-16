export const daysPassed = () =>{
const lastDate = window.localStorage.getItem('bula-cart')
const daysPassed = Math.ceil(Math.abs(new Date(JSON.parse(lastDate)[2].date) - new Date())/ ((1000 * 60 * 60 * 24)))
return daysPassed
}