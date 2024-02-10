import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const guides = [
        { id: 1, title: 'some title', body: 'lorem ipsum' },
        { id: 2, title: 'some title 2', body: 'lorem ipsum' },
        { id: 3, title: 'some title 3', body: 'lorem ipsum' },
        { id: 4, title: 'some title 4', body: 'lorem ipsum' },
        { id: 5, title: 'some title 5', body: 'lorem ipsum' },
    ];

    const guide = guides.find(g => g.id == params.id)

    if(guide) {
        return json(guide);
    }

    return json({
        message: "Error to find the post"
    });
    

    // return {
    //     status: 200,
    //     body: { guides }
    // }
    
    // return new Response();
};