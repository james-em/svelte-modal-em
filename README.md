# svelte-modal-em

Just a barebone demo to render something from anywhere

## Usage

**App.svelte**

```svelte
<ModalsRenderer>
   ...Your app
</ModalsRenderer>
```

Somewhere
```ts
  const { openModal, closeModal } = useModal();

  const handle = openModal(Modal1, { name: "Test" });

  // closeModal(handle)
```