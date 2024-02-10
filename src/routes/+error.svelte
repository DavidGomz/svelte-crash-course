<script>
    import { page } from '$app/stores';
</script>

<div>
    <h1>Oooops</h1>
    <h1>{$page.status}: {$page.error.message}</h1>
    <p>{$page.error.message}</p>
    <a href="/guides">View all Guides...</a>
</div>

<style>
    .error {
        text-align: center;
    }
</style>
