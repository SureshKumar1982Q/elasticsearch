import { Client } from '@elastic/elasticsearch'

const client = new Client({
  cloud: { id: 'SureshKumar_ecommerce:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJGYxODQ1YzJlNTMxYjQ3Y2RhNGUzMjE1MWQwYmRhNzQ4JDJhM2RkYTIzZmE4MTRlNGNiYWMzNDMwMzk3YTEyZGU4' },
  auth: {
    username: 'elastic',
    password: '169JKVpweEpxqrUpdB1vOu9N'
  }
})

interface Document {
  character: string
  quote: string
}

async function run () {
  // Let's start by indexing some data
  await client.index({
    index: 'sureshkumar',
    document: {
      character: 'Good',
      quote: 'Summer is okay.'
    }
  })
  ///Adding second index data
  await client.index({
    index: 'sureshkumar',
    document: {
      character: 'AllisOkay',
      quote: 'Next is winter'
    }
  })


  // here we are forcing an index refresh, otherwise we will not
  // get any result in the consequent search
  await client.indices.refresh({ index: 'sureshkumar' })

  // Let's search!
  const result= await client.search<Document>({
    index: 'sureshkumar',
    query: {
      match: { quote: 'winter' }
    }
  })

  console.log(result.hits.hits)
}

run().catch(console.log)