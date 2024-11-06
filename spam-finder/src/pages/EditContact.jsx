// import React, { useContext, useEffect, useState } from 'react'
// import Header from '../components/Header'
// import { useNavigate, useParams } from 'react-router-dom';
// import { dataContext } from '../context/Context';


// const EditContact = () => {
//   const [contact, setContact] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     isSpam: false
//   });
//   const { datas, editContact } = useContext(dataContext);
//   const navigate = useNavigate();
  
//   const { id } = useParams();
  
//   useEffect(() => {
//     const foundContact = datas.find((item) => item.id === id);
//     if (foundContact) {
//       setContact(foundContact);
//     } else {
//       console.log('contact is not found');

//     }
//   }, []);

//   const handleChange = (e) => {
//     setContact({ ...contact, [e.target.name]: e.target.value });

//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let success = await editContact(contact);
//     if (success) {
//       setContact({
//         name: '',
//         email: '',
//         phone: '',
//         isSpam: false
//       });
//         navigate('/');
//     }
  
//   }



//   return (
//     <div>
//       <Header />
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name</label>
//           <input type="text" name='name' id='name' placeholder={contact.name} value={contact.name} onChange={handleChange} />

//           <label htmlFor="emaill">Email</label>
//           <input type="email" name='email' id='emaill' placeholder={contact.email} value={contact.email} onChange={handleChange} />

//           <label htmlFor="phone-no">Phone Number</label>
//           <input type="number" name='phone' id='phone-no' placeholder={contact.phone} value={contact.phone} onChange={handleChange} />



//           <div>
            
//             <button type='submit'>Submit</button>

            
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default EditContact


import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../context/Context';

const EditContact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    isSpam: false
  });
  const { datas, editContact } = useContext(dataContext);
  const navigate = useNavigate();
  
  const { id } = useParams();
  
  useEffect(() => {
    const foundContact = datas.find((item) => item.id === id);
    if (foundContact) {
      setContact(foundContact);
    } else {
      console.log('Contact not found');
    }
  }, [datas, id]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let success = await editContact(contact);
    if (success) {
      setContact({
        name: '',
        email: '',
        phone: '',
        isSpam: false
      });
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              value={contact.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={contact.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter phone number"
              value={contact.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 mt-4 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
