function useGetInfo(businessInfo, setBusinessInfo) {
  const { products } = businessInfo;

  function updateData(newValue, property) {
    setBusinessInfo({ ...businessInfo, [property]: newValue });
  }

  function removeProduct(index) {
    setBusinessInfo({
      ...businessInfo,
      products: [...products.slice(0, index), ...products.slice(index + 1)],
    });
  }

  async function addProduct(product) {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/business/insertbyproduct`, {
      method: "POST",
      body: JSON.stringify({
        ...product,
        businessId: businessInfo.id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const newProduct = await res.json();

    setBusinessInfo({
      ...businessInfo,
      products: [
        ...products,
        {
          ...newProduct
        },
      ],
    });
  }

  async function updateDatabase() {
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
    removeProduct,
    addProduct,
    updateDatabase,
  };
}

export default useGetInfo;
