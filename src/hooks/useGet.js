import { useEffect, useState } from "react";

function useGet(state) {
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
  console.log(fetchedData);
  return [fetchedData, setFetchedData];
}

export default useGet;
