import { storefront } from "."
import { viewCart } from "./getCart"


export async function removeCart(cartId, lineId){
  try{
    const {data} = await storefront(removeCartQuery, {cartId:cartId, lineIds: [lineId]})
    return {status:200, message: await viewCart(data.cartLinesRemove.cart.id)}
  }catch(error){
    return {status:400, message: error}
  }
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