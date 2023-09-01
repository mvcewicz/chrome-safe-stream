<script lang="ts">
    import { writable } from "svelte/store";

    export let label: string;
    export let value: boolean;
    export let onChange: (value: boolean) => void;

    const progressVariants = {
        checked: "bg-green-300 dark:bg-[#3E4F6E]",
        unchecked: "bg-gray-200 dark:bg-gray-700",
    };

    const thumbVariants = {
        checked: "-translate-x-full left-full bg-white",
        unchecked: "translate-x-0 left-0 bg-white",
    };

    const variants = writable({
        progress: value ? progressVariants.checked : progressVariants.unchecked,
        thumb: value ? thumbVariants.checked : thumbVariants.unchecked,
    });

    $: variants.update(() => {
        return {
            progress: value
                ? progressVariants.checked
                : progressVariants.unchecked,
            thumb: value ? thumbVariants.checked : thumbVariants.unchecked,
        };
    });

    const handleToggleChange = () => {
        onChange(!value);
    };
</script>

<div class="flex items-center">
    <input
        on:change={handleToggleChange}
        {value}
        type="checkbox"
        id="toggle"
        class="hidden"
    />
    <label class="relative m-4 flex w-8 cursor-pointer" for="toggle">
        <span
            class={`h-4 w-full duration-200 rounded-full ${$variants.progress}`}
        />
        <span
            class={`absolute scale-125 shadow duration-200 h-4 w-4 rounded-full ${$variants.thumb}`}
        />
    </label>
    <span class="font-medium">{label}</span>
</div>
