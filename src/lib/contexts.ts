import type { SvelteComponent, ComponentType, ComponentProps } from "svelte";
import { getContext } from "svelte";
import { readable } from "svelte/store";

export type OpenModalFunction = <T extends SvelteComponent>(
  component: ComponentType<T>,
  props: ComponentProps<T>,
) => number;
export type CloseModalFunction = (modalHandle: number) => void;
export type ActiveModal = {
  handle: number;
  component: ComponentType;
  props: ComponentProps<SvelteComponent>;
};
export type ModalContext = {
  openModal: OpenModalFunction;
  closeModal: CloseModalFunction;
  activeModal: ReturnType<typeof readable<ActiveModal | undefined>>;
};

export const MODALS = "MODALS";

export const useModal = () => getContext<ModalContext>(MODALS);
