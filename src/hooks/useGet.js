import { useEffect, useState } from "react";

function useGet(Auth0) {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  const getData = async () => {
    setIsLoading(true);

    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${Auth0}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
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

    setIsLoading(false);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

    return {
      isLoading,
      data: fetchedData,
      setData: setFetchedData
    }


}

export default useGet;
