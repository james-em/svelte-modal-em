import type { OpenModalFunction } from "./contexts";

export const openModal: OpenModalFunction = (component, props) => {
  const element = document.createElement("div");
  document.body.appendChild(element);

  const modal = new component({
    target: element,
    props,
  });

  return {
    close: () => {
      modal.$destroy();
      document.body.removeChild(element);
    },
  };
};
