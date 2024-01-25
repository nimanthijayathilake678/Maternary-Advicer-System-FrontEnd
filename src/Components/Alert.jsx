import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successAlert = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
  });
};

export const errorAlert = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
  });
};
