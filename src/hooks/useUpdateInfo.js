
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
    console.log(newQuant);
    setBusinessInfo({
      ...businessInfo,
      products: [
        ...products,
        {
          businessId: businessInfo.businessId,
          productName: newProd,
          productPrice: newPrice,
          productImage: "",
          quantity: newQuant
        },
      ],
    });
    fetch(`${process.env.REACT_APP_BACKEND_URL}/business/insertbyproduct`, 
    {method: 'POST', 
    body: JSON.stringify({
      businessId: 2,
      productName: newProd,
      productPrice: newPrice,
      productImage: "",
      quantity: newQuant}), headers : { 'Content-Type': 'application/json' }

  })
}

function postData() {
  fetch(`${process.env.REACT_APP_BACKEND_URL}/business/updatebybusiness/${businessInfo.id}`, 
    {method: 'POST', 
    body: JSON.stringify({
      ...businessInfo
    }), headers : { 'Content-Type': 'application/json' }
  })
}
  return {
      updateData,
      removeProduct,
      addProduct,
      postData
  }

}

export default useGetInfo;