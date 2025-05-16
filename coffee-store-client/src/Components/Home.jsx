import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <div className="py-20">
      {/* Title Section */}
      <div className="text-center mb-8">
        <p className="text-lg mb-2">--- Sip & Savor ---</p>
        <h2 className="text-4xl font-bold mb-4">Our Popular Products</h2>
        <Link to="/addcoffee" className="bg-[#E3B577] text-white px-4 py-2 rounded hover:bg-[#b3935f]">
          Add Coffee
        </Link>
      </div>

      {/* Coffee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map(coffee => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Home;