import type { ComponentProps, ComponentType, SvelteComponent } from "svelte";
import type { ModalConfig } from "./contexts";

let uniqueId = 0;

class Modal {
  private _id: number;
  private _component: ComponentType;
  private _props: ComponentProps<SvelteComponent>;
  private _config: ModalConfig;
  private _closeModal: () => void;

  constructor(
    component: ComponentType,
    props: ComponentProps<SvelteComponent>,
    config: Partial<ModalConfig>,
    closeModal: () => void,
  ) {
    this._id = ++uniqueId;
    this._component = component;
    this._props = Object.assign({}, props || {});
    this._config = Object.assign(Modal.defaultConfig(), config || {});
    this._closeModal = closeModal;
  }

  public get id(): number {
    return this._id;
  }

  public get config() {
    return this._config;
  }

  public get props() {
    return this._props;
  }

  public get component() {
    return this._component;
  }

  public close() {
    this._closeModal();
  }

  private static defaultConfig(): ModalConfig {
    return {
      animation: true,
      baseStyle: true,
      backdropClass: "modal-backdrop",
      modalClass: "modal",
      keyboardEnabled: true,
    };
  }
}

export { Modal };
