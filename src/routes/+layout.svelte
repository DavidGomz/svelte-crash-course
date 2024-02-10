<script>
    import Title from '$lib/title.svelte'
    import Navbar from '../lib/navbar.svelte';
    import '../styles/global.css'
</script>

<header>
    <Title title="Ninja Gaming" />
</header>
<main>
    <slot></slot>
    <div class="nav-space">
        <Navbar />
    </div>
    
</main>
<footer>
    <p>Copyright 2024 DavidGo</p>
</footer>

<style>
    header {
        display: flex;
        justify-content: center;
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }

    .nav-space {
        display: flex;
        justify-content: center; 
    }
    
</style>