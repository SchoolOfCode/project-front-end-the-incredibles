import { useEffect, useState } from "react";

function useGetForBusiness(auth0Id, edit) {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  const getData = async () => {
    setIsLoading(true);

    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${auth0Id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let data = await res.json();

      setFetchedData(data);
    } catch {
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/business/insertbybusiness`,
        {
          method: "POST",
          body: JSON.stringify({
            auth0Id: auth0Id,
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
  }, [edit]);
  return {
    isLoading,
    data: fetchedData,
    setData: setFetchedData,
  };
}

export default useGetForBusiness;
