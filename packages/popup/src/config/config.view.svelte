<script lang="ts">
  import { writable } from "svelte/store";
  import Toggle from "../lib/toggle.svelte";
  import { ConfigController, Config } from "./config.controller";
  import { onMount } from "svelte";
  import { strategies } from "@chrome-safe-stream/shared/src";

  const config = writable<Config>();

  const syncConfig = async () => {
    config.set(await ConfigController.getInstance().getConfig());
  };

  onMount(() => {
    syncConfig();
  });

  console.log("configx", $config);
  $: console.log("config", $config);
</script>

<div>
  <Toggle
    label="Hide IP"
    onChange={async (value) => {
      const result = await $config?.set(strategies.NetStrategy, {
        enabled: value,
      });
      config.set(result);
    }}
    value={$config?.get(strategies.NetStrategy)?.enabled ?? false}
  />
</div>
