import { client } from "./utils/configSanity"



async function getData(){
  const query = `*[_type == "post"]`
  const data = await client.fetch(query, {cache: "no-store"})

  return data
}

export default async function Home() {

  const data = await getData()

  console.log(data)

  return (
    <div>
prueba
    </div>
  )
}
