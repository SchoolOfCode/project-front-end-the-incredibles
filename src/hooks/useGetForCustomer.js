import { useEffect, useState } from "react";

function useGetForCustomer(businessLink) {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState(null);

  const getData = async () => {
    setIsLoading(true);

      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${businessLink}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      let data = await res.json();
      
      setFetchedData(data);
      setIsLoading(false);
  };
  
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return {
    isLoading,
    data: fetchedData,
    setData: setFetchedData,
  };
}

export default useGetForCustomer;