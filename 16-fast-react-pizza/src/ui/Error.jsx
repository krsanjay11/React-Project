import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  // console.log(error); // ErrorResponseImpl {status: 404, statusText: 'Not Found', internal: true, data: 'Error: No route matches URL "/menud"', error: Error: No route matches URL "/menud" at getInternalRouterError (http://localhost:5173/node_modu…}

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
