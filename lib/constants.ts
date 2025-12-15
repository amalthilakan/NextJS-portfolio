// Design system color constants
export const colors = {
    primary: '#7C4DFF',
    primaryHover: '#6c42e0',
    primaryLight: 'rgba(124, 77, 255, 0.1)',
    primaryShadow: 'rgba(124, 77, 255, 0.3)',
} as const;

// Tailwind-compatible color classes
export const colorClasses = {
    primaryBg: 'bg-[#7C4DFF]',
    primaryHoverBg: 'hover:bg-[#6c42e0]',
    primaryText: 'text-[#7C4DFF]',
    primaryBorder: 'border-[#7C4DFF]',
    primaryShadow: 'shadow-[#7C4DFF]/30',
} as const;
