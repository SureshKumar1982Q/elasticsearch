import { Client } from '@elastic/elasticsearch'

const client = new Client({
  cloud: { id: 'SureshKumar_ecommerce:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJGYxODQ1YzJlNTMxYjQ3Y2RhNGUzMjE1MWQwYmRhNzQ4JDJhM2RkYTIzZmE4MTRlNGNiYWMzNDMwMzk3YTEyZGU4' },
  auth: {
    username: 'suresh.nadar@neosoftmail.com',
    password: 'Suresh231_'
  }
})

interface Document {
  character: string
  quote: string
}

async function run () {
  // Let's search!
  const result= await client.search<Document>({
    index: 'game-of-thrones',
    query: {
      match: { quote: 'winter' }
    }
  })

  console.log("the hit is " +result.hits.hits)
}

run().catch(console.log)