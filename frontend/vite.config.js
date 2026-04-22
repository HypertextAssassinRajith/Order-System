import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'

const repository = process.env.GITHUB_REPOSITORY
const repositoryName = (() => {
  if (!repository?.trim() || !repository.includes('/')) return ''
  const parts = repository.split('/').filter(Boolean)
  return parts.length > 0 ? parts[parts.length - 1] : ''
})()
const ghPagesBase = repositoryName ? `/${repositoryName}/` : '/'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? ghPagesBase : '/',
  plugins: [react()],
})
