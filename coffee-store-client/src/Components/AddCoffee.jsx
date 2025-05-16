import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleAddCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);

    fetch('http://localhost:3000/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(coffeeData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) { //data.acknowledged
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success"
          });
          form.reset();
        }
        console.log('after adding coffee in db', data);
    })
  }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-4xl font-rancho text-center font-semibold mb-4">Add New Coffee</h2>
      <p className="text-center mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

      <form onSubmit={handleAddCoffee} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              name='name'
              type="text"
              placeholder="Enter coffee name"
              className="input w-full bg-white border border-gray-300 focus:outline-none focus:border-[#b3935f]"
              required
            />
          </div>

          {/* Chef */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Chef</span>
            </label>
            <input
              name='chef'
              type="text"
              placeholder="Enter coffee chef"
              className="input w-full bg-white border border-gray-300 focus:outline-none focus:border-[#b3935f]"
              required
            />
          </div>

          {/* Supplier */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Supplier</span>
            </label>
            <input
              name='supplier'
              type="text"
              placeholder="Enter coffee supplier"
              className="input w-full bg-white border border-gray-300 focus:outline-none focus:border-[#b3935f]"
              required
            />
          </div>

          {/* Taste */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Taste</span>
            </label>
            <input
              name='taste'
              type="text"
              placeholder="Enter coffee taste"
              className="input w-full bg-white border border-gray-300 focus:outline-none focus:border-[#b3935f]"
              required
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <input
              name='category'
              type="text"
              placeholder="Enter coffee category"
              className="input w-full bg-white border border-gray-300 focus:outline-none focus:border-[#b3935f]"
              required
            />
          </div>

          {/* Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Details</span>
            </label>
            <input
              name='details'
              type="text"
              placeholder="Enter coffee details"
              className="input w-full bg-white border border-gray-300 focus:outline-none focus:border-[#b3935f]"
              required
            />
          </div>
        </div>

        {/* Photo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Photo</span>
          </label>
          <input
            name='photo'
            type="text"
            placeholder="Enter photo URL"
            className="input w-full bg-white border border-gray-300 focus:outline-none focus:border-[#b3935f]"
            required
          />
        </div>

        {/* Submit Button */}
        <button className="btn bg-[#D2B48C] hover:bg-[#b3935f] w-full font-rancho text-2xl">Add Coffee</button>
      </form>
    </div>
  );
};

export default AddCoffee;