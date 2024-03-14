import { getContext } from "svelte";
import { readable } from "svelte/store";

import type { SvelteComponent, ComponentType, ComponentProps } from "svelte";
import type { Modal } from "./modal";

export type CloseModalFunction = () => void;
export type OpenModalReturnType = { closeModal: CloseModalFunction };
export type OpenModalFunction = <T extends SvelteComponent>(
  component: ComponentType<T>,
  props: ComponentProps<T>,
  config?: Partial<ModalConfig>,
) => OpenModalReturnType;
export type ModalConfig = {
  animation: boolean;
  baseStyle: boolean;
  backdropClass: string;
  modalClass: string;
  keyboardEnabled: boolean;
  events: { [key: string]: (e: any) => void }
};
export type ModalContext = {
  openModal: OpenModalFunction;
  activeModal: ReturnType<typeof readable<Modal | undefined>>;
};

export const MODALS = "MODALS";

export const useModal = () => getContext<ModalContext>(MODALS);