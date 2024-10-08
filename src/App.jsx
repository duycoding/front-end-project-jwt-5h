import axios from "./utils/axios.customize"
import { useEffect } from "react"

function App() {
  useEffect(() =>  {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api/`)
      console.log("Check res: ", res)
    }
    fetchHelloWorld()
  }, [])
  return (
    <>
      Hello World 
      I am duycoding
    </>
  )
}

export default App
