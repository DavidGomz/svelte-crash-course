import { redirect } from "@sveltejs/kit";

export async function load({ fetch, params }) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(params)
    const id = params.id;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const guide = await response.json();
    
    if(response.ok) {
        return {
            guide
        }
    }


    redirect(301, '/guides');

    // return {
    //     // status: response.status,
    //     // error: new Error('Could not fetch the guides')
    //     status: 301,
    //     redirect: '/guides'
    // }
}