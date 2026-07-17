// Splits `text` into one <span> per character, staggering each letter's
// animation-delay by `stride` seconds based on its index. This replaces the
// long lists of hand-written `:nth-child` delay rules — the wave/rainbow
// offset is now derived from the letter's position.
//
// Spaces become non-breaking-space spans so word gaps stay visible even at
// zero letter-spacing (and they still consume a delay slot, keeping the
// wave continuous across the gap).
export function animationDelay(text, stride = 0.1) {
  return [...text].map((char, i) => (
    <span key={i} style={{ animationDelay: `${(i * stride).toFixed(1)}s` }}>
      {char === ' ' ? ' ' : char}
    </span>
  ))
}
