export async function storefront(query,variables = {}){
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL,{
        method: "POST",
        headers:{
            'Content-Type': "application/json",
            'X-Shopify-Storefront-Access-Token': 'e6f9263bd973876ec9f8b1e9e0d1f017'
        },
        body: JSON.stringify({query,variables})
    })
    console.log("asdfasdfasdf:EASE",response)
    return response.json()
} 