
function useGetInfo(businessInfo, setBusinessInfo) {
    const {products} = businessInfo;


    function updateData(newValue, property) {
    setBusinessInfo({ ...businessInfo, [property]: newValue });
    console.log(businessInfo);
  }

  function removeProduct(index) {
    setBusinessInfo({
      ...businessInfo,
      products: [...products.slice(0, index), ...products.slice(index + 1)],
    });
    console.log(products);
  }

  function addProduct(newProd, newPrice, newQuant) {
    setBusinessInfo({
      ...businessInfo,
      products: [
        ...products,
        {
          id: businessInfo.businessId,
          productName: newProd,
          productPrice: newPrice,
          productImage: "",
          quantity: newQuant
        },
      ],
    });
    fetch(`${process.env.REACT_APP_BACKEND_URL}/business/insertbyproduct`, {method: 'POST', body: JSON.stringify({
      id: parseInt(businessInfo.businessId),
      productName: newProd,
      productPrice: parseInt(newPrice),
      productImage: "",
      quantity: parseInt(newQuant)})
  })
  }
  return {
      updateData,
      removeProduct,
      addProduct
  }

}

export default useGetInfo;