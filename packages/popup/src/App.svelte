<script lang="ts">
  import Config from "./config/config.view.svelte";
  import Header from "./lib/header.svelte";
</script>

<main class=" bg-white dark:bg-slate-800 w-52">
  <Header />
  <div class="px-4 py-2">
    <Config />
  </div>
</main>
