<script lang="ts">
  import { useModal } from "../lib/contexts";
  import Modal1 from "./modals/Modal1.svelte";

  const { openModal } = useModal();

  const openExempleModal = () => {
    const { closeModal } = openModal(Modal1, { name: "Test", onClose: () => closeExempleModal() });

    const closeExempleModal = () => closeModal();
  };
</script>

<button on:click={openExempleModal}>Open modal</button>
