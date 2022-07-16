import { storefront } from "."
export async function createShopifyCart(){
  const {data} = await storefront(createCart)
  const cart = [
  {id:data.cartCreate.cart.id},
  {url:data.cartCreate.cart.checkoutUrl},
  {date:new Date()}
  ]
  window.localStorage.setItem('bula-cart', JSON.stringify(cart))
}


// TODO, query statement
const gql = String.raw
const createCart = gql`
mutation CreateCart {
	cartCreate{
    cart{
      checkoutUrl
      id
		}
	}
}
`