import { useEffect } from "react";
import {
  Link,
  Route,
  useParams,
  Switch,
  useRouteMatch,
} from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
