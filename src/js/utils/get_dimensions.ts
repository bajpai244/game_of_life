import { t_get_dimensions } from "../types/index";

const get_dimensions: t_get_dimensions = () => {
  const html = window.document.getElementsByTagName("html")[0];

  const client_height = html.clientHeight;
  const client_width = html.clientWidth;

  return [client_height, client_width];
};

export default get_dimensions;
