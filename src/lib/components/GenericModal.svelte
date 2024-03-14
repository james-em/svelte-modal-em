<script lang="ts">
    import type { SvelteComponent } from "svelte";
  import type { Modal } from "../modal";

  export let modal: Modal;

  const { animation, baseStyle, backdropClass, modalClass } = modal.config;

  const handleBackdropClick = () => {
    modal.close();
  };

  const onKeyboardClick = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      modal.close();
    }
  };

  let instance: SvelteComponent;

  $: if (instance && modal.config.events) {
    for(let [key, listener] of Object.entries(modal.config.events)) {
      instance.$on(key, listener);
    }
  }
</script>

<div
  class={backdropClass}
  class:modal-backdrop-base-style={baseStyle}
  on:click|stopPropagation={handleBackdropClick}
  on:keyup|stopPropagation={onKeyboardClick}
  role="button"
  tabindex="-1"
>
  <div
    class={modalClass}
    class:modal-base-style={baseStyle}
    class:animated={animation}
    on:click|stopPropagation
    on:keyup|stopPropagation={onKeyboardClick}
    role="button"
    tabindex="0"
    autofocus={true}
  >
    <svelte:component this={modal.component} {...modal.props} requestClose={() => modal.close()} bind:this={instance} />
  </div>
</div>

<style lang="postcss">
  .modal-backdrop-base-style {
    @apply fixed top-0 left-0 right-0 bottom-0 bg-black/40 flex justify-center items-center z-[100];
  }

  .modal-base-style {
    @apply p-2 bg-white rounded;
  }

  .animated {
    @apply animate-slideIn;
  }
</style>
