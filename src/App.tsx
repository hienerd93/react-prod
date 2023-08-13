import { useGetLoginDataQuery } from "./services/login";
import { Loader } from "./stories/Loader";
import { Link } from "react-router-dom";

export default function App() {
  const { data, isLoading } = useGetLoginDataQuery(undefined);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {isLoading ? <Loader /> : JSON.stringify(data)}
      <Link to="/counter">Go to counter</Link>
    </>
  );
}
