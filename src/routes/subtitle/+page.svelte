<script>

    let subtitle = 'This is a random title'

    const updateTitle = () => {
        subtitle = 'something completely different';
    }

    import Title from '$lib/title.svelte'

</script>

<div class="index">
    <h2>{subtitle}</h2>
    
    <p>lorem ipsum</p>


    <button on:click={updateTitle}>change subtitle</button>
    <input type="text" bind:value={subtitle} name="" id="">
</div>

<style>
    .index {
        border: 1px solid black;
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>