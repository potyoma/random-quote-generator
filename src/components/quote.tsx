import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"
import { Color } from "../constants"
import { QuoteActions } from "./quoteActions"
import { QuoteInfo } from "./quoteInfo"

type Props = {
  id: string
  color: Color
  quote: QuoteInfo
  onClick: Function
}

const Quote = ({ id, color, quote, onClick }: Props) => {
  return quote ? (
    <Card
      id={id}
      className="mx-auto"
      style={{
        width: "25rem",
      }}
    >
      <CardBody id={id}>
        <CardTitle id="text" tag="h5" style={{ color: color.hex }}>
          <FontAwesomeIcon className="mx-2" icon={faQuoteLeft} />
          {quote.quote}
        </CardTitle>
        <CardText id="author" className="text-end" style={{ color: color.hex }}>
          - {quote.author}
        </CardText>
        <QuoteActions onClick={onClick} quote={quote} color={color} />
      </CardBody>
    </Card>
  ) : null
}

export { Quote }
