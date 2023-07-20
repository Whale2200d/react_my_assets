import React from 'react';

interface DataProps {
  parentProps: Function;
}

function OfferPage({ parentProps }: DataProps) {
  const smallFunction = () => {
    const data = 'Hello World!';
    parentProps(data);
  };

  return <button onClick={smallFunction}>ChildComponent</button>;
}

export default OfferPage;

// import React from 'react'

// interface TakerPageProps {
//   getOfferPageDataProps?: (data: {
//     sharingId: number;
//     takerId: string;
//     distance: number;
//     roomId: number;
//     offerId: string;
//   }) => void;
// }

// function FirstComponent({ getOfferPageDataProps }: TakerPageProps) {
//   const showChange = () => {
//     const data = {
//       sharingId: sharingId,
//       takerId: userId,
//       distance: 거리,
//       roomId: result.id,
//       offerId: offerId!,
//     };
//     getOfferPageDataProps!(data);
//   }

//   return (
//     <div>FirstComponent</div>
//   )
// }

// export default FirstComponent
