// Auto-registers every transition effect in ./transitions/.
// Add a file there that default-exports { id, label, run } and it shows up here
// with no further wiring.
const modules = import.meta.glob('./transitions/*.js', { eager: true })

export const transitions = {}
for (const path in modules) {
  const def = modules[path].default
  if (def && def.id) {
    transitions[def.id] = def
  }
}

// Look up a transition by id. Returns null when unknown (caller swaps instantly).
export function getTransition(id) {
  return transitions[id] || null
}
