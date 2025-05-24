import { Toaster, ToastBar } from 'react-hot-toast';

const CustomToaster = () => {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{
        top: 60,
      }}
      toastOptions={{
        className: '',
        duration: 4000,
        style: {
          background: 'var(--color-accent-300)',
          color: '#F0F0F0',
          border: '1px solid rgba(240, 240, 240, 0.1)',
          borderRadius: '16px',
          padding: '16px 20px',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          maxWidth: '450px',
          backdropFilter: 'blur(20px)',
        },
        success: {
          iconTheme: {
            primary: 'var(--color-green-200)',
            secondary: 'var(--color-accent-300)',
          },
          style: {
            background: 'rgba(14, 173, 79, 0.1)',
            border: '1px solid rgba(14, 173, 79, 0.3)',
          },
        },
        error: {
          iconTheme: {
            primary: 'var(--color-red-100)',
            secondary: 'var(--color-accent-300)',
          },
          style: {
            background: 'rgba(255, 78, 78, 0.1)',
            border: '1px solid rgba(255, 78, 78, 0.3)',
          },
        },
        loading: {
          iconTheme: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-accent-300)',
          },
          style: {
            background: 'rgba(139, 82, 255, 0.1)',
            border: '1px solid rgba(139, 82, 255, 0.3)',
          },
        },
      }}
    >
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            animation: t.visible
              ? 'toast-enter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
              : 'toast-exit 0.4s cubic-bezier(0.4, 0, 1, 1) forwards',
          }}
        />
      )}
    </Toaster>
  );
};

export default CustomToaster;