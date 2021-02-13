import { useState } from 'react'

const newObject = {
  a: 1,
  b: 2,
  c: 3
}

const secondObject = {
  ...newObject,
  d: 4,
  b: 10
}

console.log(newObject)
console.log(secondObject)

const data = () => {
  const [data, setData] = useState({})
  return (
    <div>
      <h3>Current data:</h3>
      <button onClick={() => setData(newObject)}>newObject</button>
      <button onClick={() => setData(secondObject)}>secondObject</button>

      <ul>
        {Object.keys(data).map((dataKey) => (
          <li key={dataKey}>
            {dataKey}: {data[dataKey]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default data