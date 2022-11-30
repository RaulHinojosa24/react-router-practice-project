import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
