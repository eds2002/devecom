import {storefront} from './index'
export async function viewCart(cartId){
    const {data} = await storefront(viewCartQuery, {cartId:cartId})
    return data
}


const gql = String.raw

const viewCartQuery = gql`
query viewCart($cartId: ID!){
  cart(id: $cartId){
    id
    createdAt
    updatedAt
    checkoutUrl
    lines(first: 10) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              image{
                url
              }
            }
          }
          attributes {
            key
            value
          }
        }
      }
    }
    attributes {
      key
      value
    }
    estimatedCost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
  }
}
`