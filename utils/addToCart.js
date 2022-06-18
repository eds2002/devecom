const gql = String.raw
import { storefront } from "."
export async function addToCart(cartId,quantity,variantId){
  try{
    const {data} = await storefront(addToCartQuery, {variantId: variantId, cartId: cartId, quantity: quantity})
    return {status:200, message:data}
  }catch(e){
    return {status:400, message:e}
  }
}

const addToCartQuery = gql`
mutation AddToCart($cartId: ID!, $variantId: ID!, $quantity:Int) {
    cartLinesAdd(cartId: $cartId, lines: [{ quantity: $quantity, merchandiseId: $variantId}]) {
      cart {
        id
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  product {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`