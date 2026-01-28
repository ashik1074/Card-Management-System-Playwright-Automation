import pkg from 'pg';
const { Client } = pkg;

export async function queryDb(sql, params = []) {
  const client = new Client({
    host: '10.15.22.125',
    port: 5432,
    database: 'kip',
    user: 'cms',
    password: 'cms123',
  });

  await client.connect();
  const result = await client.query(sql, params);
  await client.end();

  return result.rows;
}
