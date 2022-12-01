import {
  Link,
  Route,
  useParams,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Raul H",
    text: "I'm learning a lot of React!",
  },
  {
    id: "q2",
    author: "John",
    text: "Writting books is hard...",
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Switch>
        <Route path={match.path} exact>
          <div className="centered">
            <Link className="btn--flat" to={`${match.url}/comments`} replace>
              Load Comments
            </Link>
          </div>
        </Route>
        <Route path={`${match.path}/comments`}>
          <div className="centered">
            <Link className="btn--flat" to={match.url} replace>
              Hide Comments
            </Link>
          </div>
          <Comments />
        </Route>
      </Switch>
    </>
  );
};

export default QuoteDetail;
