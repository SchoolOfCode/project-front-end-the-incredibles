
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
          productName: newProd,
          price: newPrice,
          inventoryQuantity: newQuant,
        },
      ],
    });
  }

  return {
      updateData,
      removeProduct,
      addProduct
  }
}

export default useGetInfo;