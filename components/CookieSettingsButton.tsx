'use client';

interface CookieSettingsButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function CookieSettingsButton({ className, children }: CookieSettingsButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('openCookiePreferences');
      window.dispatchEvent(event);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
