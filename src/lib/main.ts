import GenericModal from "./components/GenericModal.svelte";
import type { OpenModalFunction } from "./contexts";

const makeid = (length: number) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

let styleInjected = false;
let hash = "";

const makeStyle = () => `
  @keyframes ${hash}-slidein {
    from {
      transform: translateY(-5rem);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .${hash}-modal.${hash}-fadeout {
    transform: translateY(-5rem);
    opacity: 0;
  }

  .${hash}-modal-backdrop {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    background-color: rgba(50,50,50,0.2);
    display: flex;
    z-index: 9999;
    justify-content: center;
    align-items: center;
  }

  .${hash}-modal {
    width: 100%;
    max-width: 48rem;
    border-radius: 0.25rem;
    background-color: white;
    animation: ${hash}-slidein 300ms normal ease-in-out;
    opacity: 1;
    transform: translateY(0);
    transition: all 300ms ease-in-out;
  }
`;

export const injectStyle = () => {
  if (styleInjected) {
    return;
  }
  styleInjected = true;

  hash = makeid(8);

  const style = document.createElement("style");
  style.textContent = makeStyle();
  document.head.append(style);
};

export const C = (name: string) => {
  return `${hash}-${name}`;
};

export const openModal: OpenModalFunction = (component, props, config) => {
  injectStyle();

  const backdropClass = config?.backdropClass || "";
  const modalClass = config?.modalClass || "";

  const element = document.createElement("div");
  document.body.appendChild(element);

  const modal = new GenericModal({
    target: element,
    props: {
      modalClass,
      backdropClass,
      component,
      props,
    },
  });

  return {
    close: async () => {
      if (modal.close) {
        await modal.close();
      }

      modal.$destroy();
      document.body.removeChild(element);
    },
  };
};
