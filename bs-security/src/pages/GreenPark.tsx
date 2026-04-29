import React from "react";

const GreenPark = () => (
  <div style={{ padding: 32 }}>
    <h1>Green Park</h1>
    <img src="/images/green-park.jpg" alt="Green Park" style={{ width: '100%', maxHeight: 400, objectFit: 'cover', marginBottom: 24 }} />
    <p>Green Park is a posh locality in South Delhi, known for its upscale markets, cafes, and residential colonies. The area is popular among young professionals and families.</p>
    <h2>About Green Park</h2>
    <p>Green Park offers a blend of modern apartments and traditional homes. Its central location and excellent connectivity make it a sought-after address in Delhi.</p>
    <h2>Key Attractions</h2>
    <ul>
      <li>Green Park Market</li>
      <li>Proximity to Hauz Khas Village</li>
      <li>Upscale restaurants and cafes</li>
      <li>Nearby parks and green spaces</li>
    </ul>
    <h2>Living in Green Park</h2>
    <p>Residents enjoy a cosmopolitan lifestyle with access to premium amenities. The area is also known for its safety and community feel.</p>
    <img src="/images/green-park-2.jpg" alt="Green Park Locality" style={{ width: '100%', maxHeight: 400, objectFit: 'cover', marginTop: 24 }} />
    <p style={{ marginTop: 32 }}>For more information about Green Park, contact us or visit our office in the locality.</p>
  </div>
);

export default GreenPark;
