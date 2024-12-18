import React, { useState } from 'react';
import supabase from '../../utils/supabase';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    phnum: '',
    mainadress: '',
    subaddress: '',
    typeofpak: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerPlace = async () => {
    setLoading(true);
    setMessage(null); // Clear previous messages
    try {
      const { data, error } = await supabase
        .from('irfan') // Replace 'irfan' with your table name
        .insert([formData]);

      if (error) throw error;

      setMessage('Data inserted successfully!');
      setFormData({
        name: '',
        phnum: '',
        mainadress: '',
        subaddress: '',
        typeofpak: '',
      }); // Reset form data
    } catch (err) {
      console.error('Error inserting data:', err.message);
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form reload
    registerPlace();
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phnum: '',
      mainadress: '',
      subaddress: '',
      typeofpak: '',
    });
    setMessage(null); // Clear any messages
  };

  return (
    <div className="w-[50%] p-[2em] shadow-custom rounded-md bg-white">
      <h1 className="text-3xl mb-2 font-semibold text-center">Contact Details</h1>

      {message && (
        <p
          className={`mb-4 text-center ${
            message.startsWith('Error') ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400 focus:outline-none focus:text-black rounded-md"
          onChange={handleChange}
          value={formData.name}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400 focus:outline-none focus:text-black rounded-md"
          onChange={handleChange}
          value={formData.email}
          required
        />

        <label htmlFor="phnum">Contact No.</label>
        <input
          type="text"
          name="phnum"
          placeholder="Contact No."
          className="w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400 focus:outline-none focus:text-black rounded-md"
          onChange={handleChange}
          value={formData.phnum}
          required
        />

        <label htmlFor="mainadress">Main Address</label>
        <input
          type="text"
          name="mainadress"
          placeholder="Main Address"
          className="w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400 focus:outline-none focus:text-black rounded-md"
          onChange={handleChange}
          value={formData.mainadress}
          required
        />

        <label htmlFor="subaddress">Sub Address</label>
        <input
          type="text"
          name="subaddress"
          placeholder="Sub Address"
          className="w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400 focus:outline-none focus:text-black rounded-md"
          onChange={handleChange}
          value={formData.subaddress}
          required
        />

        <label htmlFor="typeofpak">Type of Parking</label>
        <select
          name="typeofpak"
          value={formData.typeofpak}
          className="w-[100%] h-10 p-2 mt-2 mb-1 border-[0.1em] border-gray-300 text-gray-400 focus:outline-none focus:text-black rounded-md"
          onChange={handleChange}
          required
        >
          <option value="">Select parking type</option>
          <option value="Open">Open</option>
          <option value="Covered">Covered</option>
        </select>

        <div className="flex justify-between mt-5">
          <button
            type="button"
            className="h-[2.5em] w-[6em] border-[0.1em] border-red-400 text-red-400 hover:bg-red-400 hover:text-white hover:font-semibold rounded-md"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="submit"
            className={`h-[2.5em] w-[7em] ${
              loading
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'border-[0.1em] border-green-400 text-green-400 hover:bg-green-400 hover:text-white hover:font-semibold'
            } rounded-md`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
