// Vite config — added to work around a CJS/ESM interop issue with the
// @fix-webm-duration/fix package pulled in transitively by Slidev's
// recording panel (@slidev/client/logic/recording.ts).
//
// Root cause: @fix-webm-duration/fix@1.0.1 is published as CommonJS with
// no "exports" field. Vite's static analyzer rejects the named import
// { fixWebmDuration } with:
//   SyntaxError: does not provide an export named 'fixWebmDuration'
//
// Fix: alias the package to a tiny ESM shim (./shims/fix-webm-duration-fix.mjs)
// that re-exports the named binding from the underlying CJS module.
// The recording panel is the only consumer; the deck's slide rendering
// is unaffected by this dep.
//
// The alias uses an array form with a RegExp (anchored ^...$) so that
// Vite's substring-matching does not also rewrite subpaths like
// '@fix-webm-duration/fix/src/index.js' that the shim itself imports.

import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  resolve: {
    alias: [
      {
        find: /^@fix-webm-duration\/fix$/,
        replacement: resolve(__dirname, 'shims/fix-webm-duration-fix.mjs'),
      },
    ],
  },
}
