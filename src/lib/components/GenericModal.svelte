<script lang="ts">
    import { C } from "../main";

  export let component: any;
  export let props: any;
  export let backdropClass: string;
  export let modalClass: string;

  let fadeinOut = false;

  const handleBackdropClick = () => {
    props.onBackdropClick?.();
  }

  export let close = () => {
    fadeinOut = true;

    return new Promise((resolve) => {
      setTimeout(resolve, 300);
    })
  }

</script>

<svelte:options accessors/>

<div role="button" tabindex="0" class={C('modal-backdrop') + ` ${backdropClass}`} on:click={handleBackdropClick}>
  <div class={C('modal') + ` ${modalClass} ${fadeinOut ? C('fadeout'): ''}`}>
    <svelte:component this={component} {...props}/>
  </div>  
</div>