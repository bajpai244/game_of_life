export type t_get_dimensions = () => [
  client_height: number,
  client_width: number
];

export type t_create_grid = (
  client_height: number,
  client_width: number
) => HTMLElement

export type t_resize_ele = (
  ele: HTMLElement,
  height: number,
  width: number
) => void

export type t_observe_callback = (height: number, width: number) => void

export type t_void_func = () => void