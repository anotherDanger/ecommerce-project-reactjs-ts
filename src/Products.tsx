export const fetchProducts = async () => {
    const request = new Request('src/assets/products.json',{
        method:"GET",
        headers: {
            "Content-Type":"application/json"
        }
    });

    const response = await fetch(request);
    if(!response.ok)
    {
        console.log('Its not okay');
    };
    const result = await response.json();
    return result;

}