import Prices from "@/components/Prices";

export default function PricingPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center py-8">
        <h1 className="text-5xl font-bold mb-4">Pricing for Creators & Brands</h1>
        <p className="text-lg text-black mb-8">
          Whether you're a creator looking for management or a brand seeking influencer partnerships, we have a plan for you.
        </p>
      </div>
      <Prices />
    </>
  );
} 