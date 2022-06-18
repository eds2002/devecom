import { storefront } from "."
import { viewCart } from "./getCart"

export async function updateCart(cartId, lineId, quantity){
    const lines = {id:lineId, quantity:quantity}
    const {data} = await storefront(updateCartQuery, {cartId:cartId, lines:{id:lineId, quantity:quantity} })
    return viewCart(data.cartLinesUpdate.cart.id)
}


const gql = String.raw
const updateCartQuery = gql`
mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
  
`
