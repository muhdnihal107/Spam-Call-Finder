// import React, { useContext, useState } from 'react'
// import { dataContext } from '../context/Context';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';

// const CreateContact = () => {
//   const [contact,setContact] =useState({
//     name: '',
//     email: '',
//     phone: '',
//     isSpam: false
//   });
//   const {addContact} = useContext(dataContext);
//   const navigate = useNavigate();
//   const handleChange = (e)=>{
//     setContact({...contact,[e.target.name]:e.target.value})
//   };

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     addContact(contact);
//     navigate('/')
//   }

//   return (
//    <>
//    <Header/>
//    <div>
//       <h1>Create Contact</h1>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name</label>
//           <input type="text" name='name' placeholder='Name' value={contact.name} onChange={handleChange}/>

//           <label htmlFor="email">Email</label>
//           <input type="email" name='email' placeholder='Email' value={contact.email} onChange={handleChange}/>

//           <label htmlFor="phone">Phone Number</label>
//           <input type="number" name='phone' placeholder='Phone Number' value={contact.phone} onChange={handleChange}/>

//           <div>
//             <button type='submit'>Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//    </>

    
//   )
// }

// export default CreateContact


import React, { useContext, useState } from 'react';
import { dataContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const CreateContact = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        isSpam: false,
    });
    const { addContact } = useContext(dataContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(contact);
        navigate('/');
    };

    return (
        <>
            <Header />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-green-800 mb-4">Create Contact</h1>
                <div className="bg-green-100 p-6 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-green-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={contact.name}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-green-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={contact.email}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-green-700">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={contact.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-green-800 hover:bg-green-900 text-white font-semibold rounded-md transition duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateContact;
