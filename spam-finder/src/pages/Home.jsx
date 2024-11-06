// import React, { useContext, useState } from 'react'
// import Header from '../components/Header'
// import { dataContext } from '../context/Context';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [contacts,setContacts] = useState([]);

//   const {datas,handleSpam,deleteContact} = useContext(dataContext);

//   return (
//     <>
//     <Header/>
//     <div>
//       <h1>Contacts</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone Number</th>
//             <th>Status</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead><tbody>
//         {datas.length > 0? datas.map((item)=>(
          
//           <tr key={item.id} style={item.isSpam?{backgroundColor:'red'}:{backgroundColor:'yellow'}}>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.phone}</td>
//             <td><button onClick={()=>handleSpam(item.isSpam,item.id)}>{item.isSpam ? ('spam'):('unSpam')}
//               </button></td>
//             <td>
//               <Link to={`/${item.id}`}>
//               <button>Edit</button>
//               </Link>
//             </td>
//             <td>
//               <button onClick={()=>deleteContact(item.id)}>Delete</button>
//             </td>
//           </tr>
        
//         )):<tr><td>Loading</td></tr> }
//         </tbody>
//       </table>
//     </div>
//     </>
    
//   )
// }

// export default Home

import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { dataContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Home = () => {
   const [filterContact,setFilterContact] = useState('All contacts');
   const [toggleView,setToggleView] = useState(false);
    const { datas, handleSpam, deleteContact } = useContext(dataContext);

    const filterView = ()=>{
      switch(filterContact){
        case 'Spam Only':
          return datas.filter((item)=>item.isSpam);
        case 'Unspam Only':
          return datas.filter((item)=>!item.isSpam );
        default:
          return datas;
      }
    }


    return (
        <>
            <Header />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Contacts</h1>
                <div flex justify-end mb-4>
                <div className="relative inline-block text-left"> <button className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-600 text-white hover:bg-green-500 focus:outline-none"
                 onClick={()=>setToggleView(true)}>Filter</button></div>
                {toggleView?(
                  <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                     <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={()=>{setFilterContact('All contacts');setToggleView(false)}}>All Contacts</button>
                     <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={()=>{setFilterContact('Unspam Only'); setToggleView(false)}}>UnSpam Contacts</button>
                     <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                     onClick={()=>{setFilterContact('Spam Only'); setToggleView(false)}}>Spam Contacts</button>
                  </div>
                  </div>
                ):null}
                </div>
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600">
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone Number</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Edit</th>
                            <th className="py-2 px-4 border-b">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterView().length > 0 ? (
                            filterView().map((item) => (
                                <tr key={item.id} className={item.isSpam ? 'bg-red-200' : 'bg-yellow-200'}>
                                    <td className="py-2 px-4 border-b">{item.id}</td>
                                    <td className="py-2 px-4 border-b">{item.name}</td>
                                    <td className="py-2 px-4 border-b">{item.email}</td>
                                    <td className="py-2 px-4 border-b">{item.phone}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => handleSpam(item.isSpam, item.id)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {item.isSpam ? 'Unmark Spam' : 'Mark as Spam'}
                                        </button>
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        <Link to={`/${item.id}`}>
                                            <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md px-2 py-1">
                                                Edit
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => deleteContact(item.id)}
                                            className="bg-red-500 hover:bg-red-400 text-white rounded-md px-2 py-1"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="py-2 text-center">Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Home;
