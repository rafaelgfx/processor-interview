import { toast } from "react-toastify";

export const useToaster = () => {
  const showSuccess = (message: string) => {
    toast.success(message);
  };

  const showError = (message: string) => {
    toast.error(message);
  };

  const showInfo = (message: string) => {
    toast.info(message);
  };

  return { showSuccess, showError, showInfo };
};
