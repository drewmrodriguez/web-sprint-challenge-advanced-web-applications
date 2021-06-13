import { axiosWithAuth } from "../helpers/axiosWithAuth";

export const editColorService = (color) => {
  const editColor = {
    color: `${color.color}`,
    code: { hex: `${color.code.hex}` },
    id: `${color.id}`,
  };
  return axiosWithAuth()
    .put(`/colors/${color.id}`, editColor)
    .then((res) => res)
    .catch((err) => err);
};

export const deleteColorService = (color) => {
  return axiosWithAuth()
    .delete(`/colors/${color.id}`)
    .then((res) => res)
    .catch((err) => err);
};