import { useParams } from "react-router-dom";
import  attractionsData  from "../data/attractionsData";
import AttractionDetailHero from "../components/attractionDetail/AttractionDetailHero";
import AttractionDetailContent from "../components/attractionDetail/AttractionDetailContent";
import NearbyFromHotel from "../components/attractionDetail/NearbyFromHotel";
import BackToAttractionsCTA from "../components/attractionDetail/BackToAttractionsCTA";



const AttractionDetailPage = () => {
  // 1️⃣ URL se slug nikala
  const { slug } = useParams();

  // 2️⃣ Data file se matching attraction dhoonda
  const attraction = attractionsData.find(
    (item) => item.slug === slug
  );

  // 3️⃣ Agar slug galat ho ya data na mile
  if (!attraction) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h1>Attraction not found</h1>
        <p>Please go back and select a valid attraction.</p>
      </div>
    );
  }

  // 4️⃣ Sahi data mila → Hero ko pass kar diya
  return (
    <div>
      <AttractionDetailHero data={attraction}/>
      <AttractionDetailContent data={attraction} />
      <NearbyFromHotel data={attraction}/>
      <BackToAttractionsCTA />
    </div>
  );
};

export default AttractionDetailPage;
