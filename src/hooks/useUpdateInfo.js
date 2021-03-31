
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

async function updateDatabase() {
  const {id} = businessInfo;
  const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/business/updatebybusiness/${parseInt(id)}`, 
    {method: 'PUT', 
    body: JSON.stringify({
      ...businessInfo,
      id: businessInfo.id
    }), headers : { 'Content-Type': 'application/json' }
  })
  console.log(res);
}
  return {
      updateData,
      removeProduct,
      addProduct,
      updateDatabase
  }

}

export default useGetInfo;