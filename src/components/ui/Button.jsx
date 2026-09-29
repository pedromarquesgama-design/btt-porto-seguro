export default function Button({ href = '#contatos', variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body text-sm font-bold uppercase tracking-[0.1em] rounded-sm transition-all duration-150 min-h-[44px] min-w-[44px] cursor-pointer'
  const variants = {
    primary: 'bg-primary text-foreground border-2 border-primary hover:bg-primary-dark hover:border-primary-dark hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(220,38,38,0.5)]',
    outline: 'bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background hover:-translate-y-0.5',
  }
  const sizes = {
    md: 'px-6 py-3',
    lg: 'px-10 py-4 text-base',
  }
  return (
    <a href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
