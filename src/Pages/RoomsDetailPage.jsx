import { useParams } from "react-router-dom";
import useRooms from "../hooks/useRooms"; // ✅ HOOK

import RoomDetailHero from "../components/RoomDetailPage/RoomDetailHero";
import RoomGallery from "../components/RoomDetailPage/RoomGallery";
import RoomDetails from "../components/RoomDetailPage/RoomDetails";
// import RoomAmenities from "../components/RoomDetailPage/RoomAmenities";
import BookingCTA from "../components/RoomDetailPage/BookingCTA";

const RoomDetailPage = () => {
  const { slug } = useParams();

  const { rooms, loading, error } = useRooms(); // ✅ SHEET DATA

  // ✅ LOADING STATE
  if (loading) {
    return (
      <div className="py-24 text-center text-[#666]">
        Loading room...
      </div>
    );
  }

  // ✅ ERROR STATE
  if (error) {
    return (
      <div className="py-24 text-center text-red-500">
        {error}
      </div>
    );
  }

  // ✅ FIND ROOM BY SLUG
  const room = rooms.find((item) => item.slug === slug);

  // ❌ NOT FOUND
  if (!room) {
    return (
      <div className="py-24 text-center text-[#666]">
        Room not found
      </div>
    );
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