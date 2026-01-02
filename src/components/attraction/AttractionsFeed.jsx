// AttractionsFeed.jsx
import  attractionsData  from "../../data/attractionsData";
import AttractionCard from "./AttractionCard";

const AttractionsFeed = () => {
  return (
    <section className="bg-[#faf9f6] py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-28">
        {attractionsData.map((item, index) => (
          <AttractionCard
            key={item.slug}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default AttractionsFeed;
