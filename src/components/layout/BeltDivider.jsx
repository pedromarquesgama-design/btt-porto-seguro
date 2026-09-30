/**
 * BeltDivider — a full-bleed Jiu-Jitsu belt centred on the boundary between the hero
 * slider and the section that follows, so the top half of the belt sits over the hero and
 * the bottom half sits over the section. It reads as a belt laid across the seam.
 *
 * Layout mechanics:
 *  - The belt itself is absolutely positioned at `top: 0` with `translateY(-50%)`, which
 *    puts its vertical centre exactly on the section's top edge. The negative half hangs
 *    up into the hero.
 *  - Because an absolutely positioned element is out of flow, it reserves no space, so a
 *    sibling spacer carries the height. The spacer uses the asset's own 1400:400 aspect
 *    ratio (`aspect-[7/2]`), which makes it exactly as tall as the belt at ANY viewport
 *    width. A hardcoded padding value would drift out of sync the moment the asset or
 *    viewport changed.
 *  - Net effect: the spacer occupies the belt's full height, so the section's first
 *    content starts one full belt-height below the seam — half a belt of clearance beneath
 *    the belt's lower edge.
 *
 * Constraints:
 *  - The parent must be `position: relative`.
 *  - Full-bleed by design: do not add `max-width` or horizontal margin. `body` already sets
 *    `overflow-x: hidden`, so the edges are flush with no horizontal scrollbar.
 *  - `display: block` on the image matters. As a flex/grid child it would be stretched by
 *    `align-items`, distorting the belt.
 */
export default function BeltDivider({ className = '' }) {
  return (
    <div className={`relative w-full select-none ${className}`}>
      {/* Reserves vertical space. Aspect ratio mirrors the asset (1400x400 = 7:2). */}
      <div aria-hidden="true" className="block w-full aspect-[7/2]" />
      <img
        src="/belt-btt.png"
        alt=""
        loading="lazy"
        decoding="async"
        width={1400}
        height={400}
        className="pointer-events-none absolute inset-x-0 top-0 block h-auto w-full -translate-y-[15%] drop-shadow-[0_18px_28px_rgba(0,0,0,0.85)]"
      />
    </div>
  )
}
