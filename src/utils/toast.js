import toast from 'react-hot-toast';

export const showToast = {
  success: (message, options = {}) => {
    return toast.success(message, {
      duration: 3000,
      ...options,
    });
  },

  error: (message, options = {}) => {
    return toast.error(message, {
      duration: 4000,
      ...options,
    });
  },

  loading: (message, options = {}) => {
    return toast.loading(message, {
      ...options,
    });
  },

  promise: (promise, messages, options = {}) => {
    return toast.promise(promise, messages, {
      style: {
        minWidth: '250px',
      },
      ...options,
    });
  },

  custom: (message, options = {}) => {
    return toast(message, {
      icon: '💜',
      style: {
        border: '1px solid var(--color-primary)',
      },
      ...options,
    });
  },

  itemAdded: (itemName) => {
    return toast.success(`${itemName} добавлен в корзину`, {
      icon: '🛒',
      duration: 2500,
    });
  },

  itemRemoved: (itemName) => {
    return toast.error(`${itemName} удалён из витрины`, {
      icon: '🗑️',
      duration: 2500,
    });
  },

  tradeSuccess: () => {
    return toast.success('Обмен успешно завершён!', {
      icon: '🎉',
      duration: 4000,
    });
  },
};

export const dismissAll = () => {
  toast.dismiss();
};

export const dismiss = (toastId) => {
  toast.dismiss(toastId);
};