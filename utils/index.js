export async function storefront(query,variables = {}){
    try{
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL,{
            method: "POST",
            headers:{
                'Content-Type': "application/json",
                'X-Shopify-Storefront-Access-Token': NEXT_PUBLIC_ACCESS_TOKEN
            },
            body: JSON.stringify({query,variables})
        })
        console.log(JSON.stringify(variables))
        return response.json()
    }catch(e){
        console.log(e)
    }
} 