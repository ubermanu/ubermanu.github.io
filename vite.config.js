import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $data: path.resolve(__dirname, 'data'),
    },
  },
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), '/data'],
    },
  },
})
