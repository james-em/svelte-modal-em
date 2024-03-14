<script lang="ts">
  import { setContext } from "svelte";
  import { readonly, writable } from "svelte/store";
  import { MODALS } from "./contexts";
  import type { ModalContext, OpenModalFunction } from "./contexts";
  import GenericModal from "./components/GenericModal.svelte";
  import { Modal } from "./modal";

  const modals = writable<Modal[]>([]);
  const activeModal = writable<Modal | undefined>();

  const openModal: OpenModalFunction = (component, props, config) => {
    const modal = new Modal(component, props, config || {}, () => closeModal());

    const closeModal = () => {
      $modals = $modals.filter((m) => m.id !== modal.id);
      $activeModal = undefined;
    };

    $modals = $modals.concat(modal);
    $activeModal = modal;

    return { closeModal };
  };

  setContext<ModalContext>(MODALS, {
    openModal,
    activeModal: readonly(activeModal),
  });
</script>

{#each $modals as modal (modal.id)}
  <GenericModal {modal} />
{/each}

<slot />
