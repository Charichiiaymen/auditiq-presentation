// ESM shim for the CommonJS @fix-webm-duration/fix package.
// The upstream package is published as CommonJS with no "exports" field,
// which makes Vite's static analyzer reject the named import
// { fixWebmDuration } used by Slidev's recording panel.
// This shim re-exports the named binding from the CJS module so that
// both `import { fixWebmDuration }` and the CJS default work.

import mod from '@fix-webm-duration/fix/src/index.js'

export const fixWebmDuration = mod.fixWebmDuration ?? mod.default?.fixWebmDuration ?? mod.default
export default mod
