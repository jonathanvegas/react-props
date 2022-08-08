import React, {useState} from "react";

function Coffee(){
  const [coffeList, setCoffeeList] = useState();
  const getCoffee = (temperature) => {
    //fetch coffee api
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then(results => results.json())
      .then(data => setCoffeeList(data))
      .catch(err => alert(err))
  }
  return(
    <>
      <button onClick={() => getCoffee('hot')}>HOT</button>
      <button onClick={() => getCoffee('iced')}>ICED</button> 
      <section>
        <h2>Coffee List</h2>
        {!coffeList
          ? <p>Loading...</p>
          : coffeList.map(coffee => (
            <p key={coffee.id}>{coffee.title}: {coffee.description}</p>
          ))    
        }  
      </section>   
    </>
  )
}

export default Coffee;
