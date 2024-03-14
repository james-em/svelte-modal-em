<script lang="ts">
  const { requestClose } = $$restProps;

  export let name: string;
  export let onClose: () => void;
</script>

<div class="text-3xl font-bold underline">
  Hi {name}
</div>

<button on:click={onClose}>Custom Close</button>
<button on:click={requestClose}>Built in Close</button>
