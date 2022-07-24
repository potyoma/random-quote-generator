import { Button, Col, Row } from "reactstrap"
import { Color } from "../constants"
import { QuoteInfo } from "./quoteInfo"
import { SocialLink } from "./socialLink"

type Props = {
  onClick: Function
  color: Color
  quote: QuoteInfo
}

const QuoteActions = ({ onClick, color, quote }: Props) => {
  return (
    <Row className="justify-content-between">
      <Col sm={5}>
        <Row>
          <Col>
            <SocialLink
              id="post-quote"
              type="tumblr"
              quote={quote}
              color={color}
            />
          </Col>
          <Col>
            <SocialLink
              id="tweet-quote"
              type="twitter"
              quote={quote}
              color={color}
            />
          </Col>
        </Row>
      </Col>
      <Col sm={5} className="align-self-center">
        <Button
          id="new-quote"
          outline={false}
          color="link"
          size="10px"
          style={{ backgroundColor: color.hex, color: "#fff" }}
          onClick={() => onClick()}
        >
          New quote
        </Button>
      </Col>
    </Row>
  )
}

export { QuoteActions }
