import React from 'react';
import OfferPage from '../Child';

function TakerPage() {
  const parentFunction = (x: string) => {
    console.log(x);
  };

  return <OfferPage parentProps={parentFunction} />;
}

export default TakerPage;

// import React from 'react'
// import FirstComponent from '../Child';

// function SecondComponent() {
//   const showChange = (data: {
//     sharingId: number;
//     takerId: string;
//     distance: number;
//     roomId: number;
//     offerId: string;
//   }) => {
//     setSelectedUserData(data);
//   };
//   <FirstComponent getOfferPageDataProps={showChange} />;

//   return (
//     <div>SecondComponent</div>
//   )
// }

// export default SecondComponent
