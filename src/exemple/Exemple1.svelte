<script lang="ts">
  import { useModal } from "../lib/contexts";
  import Modal1 from "./modals/Modal1.svelte";

  const { openModal } = useModal();

  openModal(Modal1, { name: "Test" });
</script>
