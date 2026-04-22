import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const ghPagesBase = repositoryName ? `/${repositoryName}/` : '/'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? ghPagesBase : '/',
  plugins: [react()],
})
