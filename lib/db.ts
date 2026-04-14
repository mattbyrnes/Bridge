import { Pool, ClientBase } from 'pg'

// Use non-pooling URL and append libpq compat flag to fix SSL certificate issues
let connectionString = process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL || ''

// Add libpq compatibility mode to handle SSL properly
if (connectionString && !connectionString.includes('uselibpqcompat')) {
  const separator = connectionString.includes('?') ? '&' : '?'
  connectionString = `${connectionString}${separator}uselibpqcompat=true`
}

const pool = new Pool({
  connectionString,
  max: 20,
})

// Single query transactions.
export async function query(text: string, params?: unknown[]) {
  return pool.query(text, params)
}

// Use for multi-query transactions.
export async function withConnection<T>(
  fn: (client: ClientBase) => Promise<T>,
): Promise<T> {
  const client = await pool.connect()
  try {
    return await fn(client)
  } finally {
    client.release()
  }
}
