# svelte-modal-renderer

Just a barebone demo to render something from anywhere

## Usage

**App.svelte**

```svelte
<ModalsRenderer>
   ...Your app
</ModalsRenderer>
```

**Modal1.svelte**
```svelte
<script lang="ts">
  const { requestClose } = $$restProps;
</script>

<button on:click={requestClose}>Close</button>
```

**Somewhere.svelte**
```ts
const { openModal } = useModal();

const { closeModal } = openModal(Modal1, { ...props }, { ...config });
```