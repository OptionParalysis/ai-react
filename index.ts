import concurrently from 'concurrently'

concurrently([
  {
    name: 'sever',
    command: 'bun run dev',
    cwd: 'packages/server',
    prefixColor: 'cyan',
  },
  {
    name: 'client',
    command: 'bun run dev',
    cwd: 'packages/client',
    prefixColor: 'green',
  },
])
