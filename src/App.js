const App = () => {
  const surpriseOptions = [
    'A boy bite a dog with his sharp teeth',
    'A cat and a rat are wakling on a road holding each others hand',
    'A cock is swimming on a pond with his chicks like a duck',
    'Fish is cooking a fish on the kitchen'
  ]

const getImages =  async() => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "BLUGH"
      }),
      headers: {
        "Content-type": "application/json"
      }
    }
    const response = await fetch('https://localhost:8000/images', options)
    const data = await response.json()
    console.log(data)

  } catch (error) {
    console.error(error)
  }
}

  return (
    <div className="app">
      <section className="search-section">
        <p>Start with a detailed description
          <span className="surprise">Surprise me</span>
        </p>
        <div className="input-container">
          <input placeholder="An impressionist oil painting of a sunflower in a purple vase..." 
          />
          <button onClick={getImages}>Generate</button>
        </div>
      </section>
      <section className="image-section"></section>
    </div>
  )
}

export default App