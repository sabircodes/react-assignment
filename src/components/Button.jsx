export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '' 
}) {
  const baseStyles = 'font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-accent-orange hover:bg-accent-orange/90 text-white',
    outline: 'border-2 border-base-light text-base-light hover:bg-base-light/10',
    white: 'bg-white hover:bg-base-light text-accent-green',
    'outline-white': 'border-2 border-white text-white hover:bg-white/10'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}