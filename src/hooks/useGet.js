import { useEffect, useState } from "react";

function useGet() {
  const [fetchedData, setFetchedData] = useState(null);
  let num = 0;
  const getData = async () => {
    let res = await fetch(process.env.REACT_APP_BACKEND_URL);
    let data = await res.json();
    setFetchedData(data);
    console.log(data)
  };
  useEffect(() => {
    // while(num < 5){
      getData();
      // num++
    // }
    // eslint-disable-next-line
  }, []);
  console.log(fetchedData);
  return [fetchedData, setFetchedData];
}

export default useGet;
