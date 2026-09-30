const VARIANTS = {
  primary:
    'text-white border border-white/10 bg-gradient-to-b from-red-500 via-red-600 to-red-700 ' +
    'shadow-[0_2px_0_0_#7f1d1d,0_10px_20px_-8px_rgba(220,38,38,0.7)] ' +
    'hover:from-red-400 hover:via-red-500 hover:to-red-600 ' +
    'hover:shadow-[0_3px_0_0_#7f1d1d,0_16px_28px_-8px_rgba(220,38,38,0.85)] ' +
    'active:translate-y-[3px] active:shadow-[0_0_0_0_#7f1d1d,0_6px_12px_-6px_rgba(220,38,38,0.6)]',
  outline:
    'text-foreground border-2 border-foreground/80 bg-white/[0.03] ' +
    'shadow-[0_2px_0_0_rgba(250,250,250,0.25)] ' +
    'hover:border-foreground hover:bg-foreground hover:text-background ' +
    'hover:shadow-[0_3px_0_0_rgba(250,250,250,0.35),0_12px_24px_-10px_rgba(250,250,250,0.4)] ' +
    'active:translate-y-[3px] active:shadow-[0_0_0_0_rgba(250,250,250,0.25)]',
  gold:
    'text-black border border-amber-300/40 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 ' +
    'shadow-[0_2px_0_0_#92400e,0_10px_20px_-8px_rgba(245,158,11,0.7)] ' +
    'hover:from-amber-200 hover:via-amber-300 hover:to-amber-400 ' +
    'hover:shadow-[0_3px_0_0_#92400e,0_16px_28px_-8px_rgba(245,158,11,0.85)] ' +
    'active:translate-y-[3px] active:shadow-[0_0_0_0_#92400e]',
}

const SIZES = {
  sm: 'min-h-[38px] px-4 py-2 text-xs',
  md: 'min-h-[44px] px-6 py-3 text-sm',
  lg: 'min-h-[52px] px-10 py-4 text-base',
}

const BASE =
  'group relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-md ' +
  'font-body font-bold uppercase tracking-[0.1em] no-underline ' +
  'transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out ' +
  'motion-reduce:transform-none motion-reduce:transition-none ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-background'

export default function Button({ href = '#contatos', variant = 'primary', size = 'md', className = '', children, ...rest }) {
  return (
    <a
      href={href}
      className={`${BASE} ${VARIANTS[variant] ?? VARIANTS.primary} ${SIZES[size] ?? SIZES.md} ${className}`}
      {...rest}
    >
      {/* Top gloss — sells the physical keycap feel */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent"
      />
      {/* Hover sheen sweep */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-4 -left-1/3 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-[left,opacity] duration-500 ease-out group-hover:left-[115%] group-hover:opacity-100 motion-reduce:hidden"
      />
      <span className="relative">{children}</span>
    </a>
  )
}
