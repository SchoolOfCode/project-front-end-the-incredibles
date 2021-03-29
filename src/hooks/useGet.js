import { useEffect, useState } from "react";

function useGet() {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let res = await fetch(process.env.REACT_APP_BACKEND_URL);
      let data = await res.json();
      setFetchedData(data);
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return [fetchedData, setFetchedData];
}

export default useGet;
