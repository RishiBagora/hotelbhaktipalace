import { useParams } from "react-router-dom";
import roomsData from "../data/roomsData";

import RoomDetailHero from "../components/RoomDetailPage/RoomDetailHero";
import RoomGallery from "../components/RoomDetailPage/RoomGallery";
import RoomDetails from "../components/RoomDetailPage/RoomDetails";
// import RoomAmenities from "../components/RoomDetailPage/RoomAmenities";
import BookingCTA from "../components/RoomDetailPage/BookingCTA";

const RoomDetailPage = () => {
  const { slug } = useParams();

  // ✅ IMPORTANT LINE
  const room = roomsData.find((item) => item.slug === slug);

  // safety check
  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div>
      <RoomDetailHero data={room} />
      <RoomDetails data={room} />
      {/* <RoomAmenities data={room} /> */}
      <RoomGallery data={room} />
      <BookingCTA data={room} />
    </div>
  );
};

export default RoomDetailPage;
