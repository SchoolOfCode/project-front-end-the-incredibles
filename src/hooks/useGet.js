import { useEffect, useState } from "react";

function useGet(Auth0) {
  const [fetchedData, setFetchedData] = useState(null);
 
  const getData = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${Auth0}`);
      let data = await res.json();
      setFetchedData(data);
      // console.log(data)
    } catch {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/business/insertbybusiness`,
        {
          method: "POST",
          body: JSON.stringify({
            auth0Id: Auth0,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      let data = await res.json();
      setFetchedData(data);
    }
  };
  useEffect(() => {
    // while(num < 5){
    getData();
    // num++
    // }
    // eslint-disable-next-line
  }, []);

  // console.log(`log from useGet ${fetchedData}`);
  return [fetchedData, setFetchedData];
}

export default useGet;
