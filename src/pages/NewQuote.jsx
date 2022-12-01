import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote, false);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status]);

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
