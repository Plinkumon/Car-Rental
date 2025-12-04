import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{backgroundColor: 'white', display:'flex', flexDirection: 'column', alignItems:'center', height:'400px',justifyContent:'center'}}>
      <h1>Oops!</h1>
      <h3>Sorry, an unexpected error has occurred.</h3>
      <h5 style={{color: 'red'}}>
        <i>{error.statusText || error.message}</i>
      </h5>
    </div>
  );
}
