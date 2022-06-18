import { storefront } from "."
import { viewCart } from "./getCart"


export async function removeCart(cartId, lineId){
    const {data} = await storefront(removeCartQuery, {cartId:cartId, lineIds: [lineId]})
    return viewCart(data.cartLinesRemove.cart.id)
}


const gql = String.raw

const removeCartQuery = gql`
mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
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