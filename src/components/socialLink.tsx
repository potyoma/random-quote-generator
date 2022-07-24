import {
  faTumblrSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Color } from "../constants"
import { QuoteInfo } from "./quoteInfo"

type Props = {
  id: string
  type: SocialLinkType
  quote: QuoteInfo
  color: Color
}

type SocialLinkType = "tumblr" | "twitter"

const SocialLink = ({ id, type, quote, color }: Props) => {
  const getIcon = (type: SocialLinkType) => {
    switch (type) {
      case "tumblr":
        return faTumblrSquare
      case "twitter":
        return faTwitterSquare
    }
  }

  const genTumblrLink = (quote: QuoteInfo) =>
    `https://www.tumblr.com/widgets/share/tool?posttype=quote&` +
    `tags=quotes,freecodecamp&caption=${encodeURI(quote.author)}` +
    `&content=${encodeURI(quote.quote)}&canonicalUrl=https%3A%2` +
    `F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`

  const genTwitterLink = (quote: QuoteInfo) =>
    `https://twitter.com/intent/tweet?hashtags=quotes&related` +
    `=freecodecamp&text=${encodeURI(quote.quote)}` +
    `${encodeURI(quote.author)}`

  const genHref = (type: SocialLinkType, quote: QuoteInfo) => {
    switch (type) {
      case "tumblr":
        return genTumblrLink(quote)
      case "twitter":
        return genTwitterLink(quote)
    }
  }

  return (
    <a id={id} href={genHref(type, quote)}>
      <FontAwesomeIcon
        style={{ color: color.hex }}
        size={"3x"}
        icon={getIcon(type)}
      />
    </a>
  )
}

export { SocialLink }
