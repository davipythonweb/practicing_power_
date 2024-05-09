import database from "infra/database.js"

async function status(request, response) {
  const result = await database.query('SELECT 1 + 1 as sum;')
  console.info(result.rows)
  response.status(200).json({chave:"Paciência e esperiência!"})
}

export default status