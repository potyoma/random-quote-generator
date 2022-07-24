import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardBody, CardFooter, CardText, CardTitle } from "reactstrap"
import { Color } from "../constants"
import { QuoteActions } from "./quoteActions"
import { QuoteInfo } from "./quoteInfo"

type Props = {
  color: Color
  quote: QuoteInfo
  onClick: Function
}

const Quote = ({ color, quote, onClick }: Props) => {
  return quote ? (
    <Card
      className="mx-auto"
      style={{
        width: "25rem",
      }}
    >
      <CardBody id="quote-box">
        <CardTitle id="text" tag="h5" style={{ color: color.hex }}>
          <FontAwesomeIcon className="mx-2" icon={faQuoteLeft} />
          {quote.quote}
        </CardTitle>
        <CardText id="author" className="text-end" style={{ color: color.hex }}>
          - {quote.author}
        </CardText>
        <QuoteActions onClick={onClick} quote={quote} color={color} />
      </CardBody>
      <CardFooter style={{ backgroundColor: "#fff" }}>
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://github.com/potyoma/random-quote-generator"
        >
          @potyoma
        </a>
      </CardFooter>
    </Card>
  ) : null
}

export { Quote }
