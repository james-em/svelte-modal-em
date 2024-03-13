<script lang="ts">
  import { openModal } from "../lib/main";
  import Modal1 from "./modals/Modal1.svelte";

  const {close} = openModal(Modal1, { name: "Test" });

  setTimeout(() => {
    close();
  }, 5000)
</script>
