import {storefront} from './index'
export async function viewCart(cartId){
    try{
      const {data} = await storefront(viewCartQuery, {cartId:cartId})
      return data
    }catch(e){
      return ('Error in loading props',e)
    }
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
              title
              priceV2{
                amount
              }
              image {
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