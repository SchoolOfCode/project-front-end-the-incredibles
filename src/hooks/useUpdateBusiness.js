function useUpdateBusiness(businessInfo, setBusinessInfo) {

  async function updateData(newValue, property) {
    setBusinessInfo({ ...businessInfo, [property]: newValue });

    //for demo
    const { id } = businessInfo;
    await fetch(
      `${
        process.env.REACT_APP_BACKEND_URL
      }/business/updatebybusiness/${parseInt(id)}`,
      {
        method: "PUT",
        body: JSON.stringify({
          ...businessInfo,
          id: businessInfo.id,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    //
  }

  async function updateBusiness() {
    const { id } = businessInfo;
    await fetch(
      `${
        process.env.REACT_APP_BACKEND_URL
      }/business/updatebybusiness/${parseInt(id)}`,
      {
        method: "PUT",
        body: JSON.stringify({
          ...businessInfo,
          id: businessInfo.id,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return {
    updateData,
    updateBusiness
  };
}

export default useUpdateBusiness;
