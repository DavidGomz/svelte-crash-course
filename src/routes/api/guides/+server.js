import { json } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const guides = [
        { id: 1, title: 'some title' },
        { id: 2, title: 'some title 2' },
        { id: 3, title: 'some title 3' },
        { id: 4, title: 'some title 4' },
        { id: 5, title: 'some title 5' },
    ];

    return json(guides);

    // return {
    //     status: 200,
    //     body: { guides }
    // }
    
    // return new Response();
};