<!-- <script context="module">
    export const load = async ({ fetch }) => {
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

        return {
            slug
        };
    }
</script> -->

<script>
    export let data;
</script>


<div class="guides">
    <ul>
        {#each data.guides as guide}
            <li>
                <a data-sveltekit-preload-data="hover" href={`/guides/${guide.id}`}>{guide.title}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .guides {
        margin-top: 20px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
</style>