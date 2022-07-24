import { useEffect, useState } from "react"
import { Col, Row } from "reactstrap"
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
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: color.hex,
        width: "100%",
        height: "100%",
        position: "fixed",
      }}
    >
      <Row className="App">
        <Quote color={color} quote={quotes[ind]} onClick={handleClick} />
      </Row>
    </div>
  )
}

export default App
