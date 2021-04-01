import React from "react";



function Message ({ message, redirect }){
  return(
  <div>
  <section>
      <p>{message}</p>  
</section>
<br></br>
<section>
<p>{redirect}</p>
</section>
</div>
  );
};
  export default Message;