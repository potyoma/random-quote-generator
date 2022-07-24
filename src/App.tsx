import { useEffect, useState } from "react"
import { Row } from "reactstrap"
import "./App.css"
import { Quote } from "./components/quote"
import { QuoteInfo } from "./components/quoteInfo"
import { colors } from "./constants"
import { getQuotes } from "./quotesHelper"

const App = () => {
  const [color, setColor] = useState(colors[0])
  const [quotes, setQuotes] = useState<Array<QuoteInfo>>([])
  const [ind, setInd] = useState(0)

  useEffect(() => {
    getQuotes().then((resp) => setQuotes(resp))
  }, [])

  useEffect(() => {
    updateColorsAndQuotes()
  }, [quotes])

  const rand = (max: number) => Math.floor(Math.random() * (max - 1))

  const updateColorsAndQuotes = () => {
    const index = rand(quotes.length)
    const newColor = rand(colors.length)
    setColor(colors[newColor])
    setInd(index)
  }

  const handleClick = () => updateColorsAndQuotes()

  return (
    <Row
      className="App align-items-center justify-content-center"
      style={{
        backgroundColor: color.hex,
        width: "100vw",
        height: "100%",
        position: "fixed",
      }}
    >
      <Quote
        id="quote-box"
        color={color}
        quote={quotes[ind]}
        onClick={handleClick}
      />
    </Row>
  )
}

export default App
