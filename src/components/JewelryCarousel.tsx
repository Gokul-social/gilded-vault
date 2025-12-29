import { JewelryCard } from "./JewelryCard";

const jewelryItems = [
  {
    name: "Antique Gold Necklace",
    weight: "24.5g",
    value: "₹2,20,500",
    huid: "JHJ7823912",
    purity: "22K",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"
  },
  {
    name: "Temple Gold Bangles",
    weight: "18.2g",
    value: "₹1,63,800",
    huid: "BGL4521890",
    purity: "22K",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop"
  },
  {
    name: "Kundan Earrings",
    weight: "10.1g",
    value: "₹90,900",
    huid: "ERG9012345",
    purity: "22K",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop"
  }
];

export const JewelryCarousel = () => {
  return (
    <div className="mt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between px-6 mb-4">
        <h3 className="font-display text-lg font-semibold text-foreground">Your Digital Vault</h3>
        <button className="text-sm text-primary font-medium hover:underline">View All</button>
      </div>
      
      <div className="flex gap-4 px-6 pb-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {jewelryItems.map((item, index) => (
          <JewelryCard key={item.huid} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};
