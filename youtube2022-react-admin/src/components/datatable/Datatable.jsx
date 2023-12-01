// import "./datatable.scss";
// import React, { useState, useEffect } from 'react';
// import { DataGrid } from "@mui/x-data-grid";
// import userColumns from "../../datatablesource";
// import UserRows from "../../datatable1";
// import { Link } from "react-router-dom";

// import db from '../../firebase';
// import {
//     collection,
//     getDocs,
//     addDoc,
//     deleteDoc,
//     doc,
//   } from 'firebase/firestore';
  
// const Datatable = () => {
//   const [formData, setFormData] = useState(UserRows);
//   // console.log(formData)
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const fetchData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'myproject'));
//       const data = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       console.log(data)
      
//     } catch (err) {
//       console.error('Error fetching contacts: ', err);
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form fields
//     if (
//       !formData.id ||
//       !formData.projectName ||
//       !formData.status 
//     ) {
//       console.log('Please fill in all fields');
//       return;
//     }

//     const newContact = { ...formData };

//     try {
//       const docRef = await addDoc(collection(db, 'contacts'), newContact);
//       console.log('Contact added with ID: ', docRef.id);
//     } catch (err) {
//       console.error('Error adding contact: ', err);
//     }
//     fetchData();
//     setFormData({ id: '', projectName: '', status: ''});
//   };
//   useEffect(() => {
//     //console.log('me ranns');

//     fetchData();
//   }, []);

//   const handleDelete = (id) => {
//     setFormData(formData.filter((item) => item.id !== id));
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];

  
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         Add New Project
//         <Link to="/users/new" className="link">
//           Add New Project
//         </Link>
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={formData}
//         columns={userColumns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default Datatable;

import "./datatable.scss";
import React, { useState, useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import userColumns from "../../datatablesource";
import UserRows from "../../datatable1";
import { Link } from "react-router-dom";

import db from '../../firebase';
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
  } from 'firebase/firestore';
const Datatable = () => {
  const [formData, setFormData] = useState({ id: '', projectName: '', status: '' });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'myproject'));
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    } catch (err) {
      console.error('Error fetching data: ', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.id || !formData.projectName || !formData.status) {
      console.log('Please fill in all fields');
      return;
    }

    const newContact = { ...formData };

    try {
      const docRef = await addDoc(collection(db, 'myproject'), newContact);
      console.log('Contact added with ID: ', docRef.id);
    } catch (err) {
      console.error('Error adding contact: ', err);
    }
    fetchData();
    setFormData({ id: '', projectName: '', status: '' });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'myproject', id));
      console.log('Contact deleted with ID: ', id);
      fetchData();
    } catch (err) {
      console.error('Error deleting contact: ', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
                </Link>
              </div>
            );
          },
        },
      ];
      return (
        <div>
        
      
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Project Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.projectName}</td>
                  <td>{item.status}</td>
                  <td>
                    {/* Render the action buttons from actionColumn */}
                    {actionColumn.map((column, index) => (
                      <div key={index} className="cellAction">
                        {column.renderCell({ row: item })}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
                    }

export default Datatable;


