export default function SectionDivider({ soft = false }) {
  if (soft) {
    return <div className="-my-px h-8 bg-gradient-to-b from-background-alt to-background" aria-hidden="true" />
  }
  return <div className="h-1 w-full bg-gradient-to-r from-primary via-gold to-transparent" aria-hidden="true" />
}
