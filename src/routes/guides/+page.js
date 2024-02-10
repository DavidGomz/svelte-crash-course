export const load = async ({ params }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const guides = await response.json();
    
    if(response.ok) {
        return {
            guides
        }
    }

    return {
        status: response.status,
        error: new Error('Could not fetch the guides')
    }
    
}

// export async function load({ fetch }) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const guides = await response.json();

//     if(response.ok) {
//         // return {
//         //     'this string'
//         // }
//         return {
//             'guides': 'aaa'
//         }
//     }

//     return {
//         status: response.status,
//         error: new Error('Could not fetch the guides')
//     }
// } 