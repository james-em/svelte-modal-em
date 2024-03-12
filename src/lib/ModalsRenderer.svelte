<script lang="ts">
  import { setContext } from "svelte";
  import { readonly, writable } from "svelte/store";
  import { MODALS } from "./contexts";
  import type { ActiveModal, CloseModalFunction, ModalContext, OpenModalFunction } from "./contexts";

  let uniqueId = 0;

  const modals = writable<ActiveModal[]>([]);
  const activeModal = writable<ActiveModal>();

  const openModal: OpenModalFunction = (component, props) => {
    uniqueId++;

    const modal: ActiveModal = { handle: uniqueId, component, props };

    $modals = $modals.concat(modal);

    return uniqueId;
  };

  const closeModal: CloseModalFunction = (modalHandle) => {
    $modals = $modals.filter((modal) => modal.handle !== modalHandle);
  };

  setContext<ModalContext>(MODALS, {
    openModal,
    closeModal,
    activeModal: readonly(activeModal),
  });
</script>

{#each $modals as modal (modal.handle)}
  <svelte:component this={modal.component} {...modal.props || {}} />
{/each}

<slot />
