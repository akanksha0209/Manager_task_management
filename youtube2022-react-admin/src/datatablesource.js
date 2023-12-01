// export const userColumns = [
//   { field: "id", headerName: "ID", width: 70 },
//   {
//     field: "user",
//     headerName: "Project Name",
//     width: 230,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithImg">
//           {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
//           {params.row.username}
//         </div>
//       );
//     },
//   },
  

 
//   {
//     field: "status",
//     headerName: "Status",
//     width: 160,
//     renderCell: (params) => {
//       return (
//         <div className={`cellWithStatus ${params.row.status}`}>
//           {params.row.status}
//         </div>
//       );
//     },
//   },
// ];

// //temporary data
// export const userRows = [
//   {
//     id: 1,
//     username: "Project1",
//     status: "active",
    
    
//   },
//   {
//     id: 2,
//     username: "Project2",
    
//     status: "passive",
    
//   },
//   {
//     id: 3,
//     username: "Lannister",
    
//     status: "pending",
    
//   },
//   {
//     id: 4,
//     username: "Stark",
    
//     status: "active",
    
//   },
//   {
//     id: 5,
//     username: "Targaryen",
    
//     status: "passive",
    
//   },
//   {
//     id: 6,
//     username: "Melisandre",
    
//     status: "active",
    
//   },
//   {
//     id: 7,
//     username: "Clifford",
   
//     status: "passive",
    
//   },
  
// ];

// import React, { useEffect, useState } from 'react';
// import { getDatabase, ref, onValue } from 'firebase/database';
// const firebaseConfig = {
//   apiKey: "AIzaSyDe9qv2H3VDzw_7KKDeOk_rpYttTIR-Up8",
//   authDomain: "myproject-d28ae.firebaseapp.com",
//   projectId: "myproject-d28ae",
//   storageBucket: "myproject-d28ae.appspot.com",
//   messagingSenderId: "136309300823",
//   appId: "1:136309300823:web:9474432a8ee66a80778d12",
//   measurementId: "G-18EM7ZZX12"
// };



// const UserTable = () => {
//   const [userRows, setUserRows] = useState([]);

//   useEffect(() => {
//     const database = getDatabase();
//     const dataRef = ref(database, 'myproject'); // Replace 'myproject' with your database reference

//     onValue(dataRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const rows = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
//         setUserRows(rows);
//       }
//     });
//   }, []);

//   const userColumns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     {
//       field: 'user',
//       headerName: 'Project Name',
//       width: 230,
//       renderCell: (params) => {
//         return (
//           <div className="cellWithImg">
//             {params.row.username}
//           </div>
//         );
//       },
//     },
//     {
//       field: 'status',
//       headerName: 'Status',
//       width: 160,
//       renderCell: (params) => {
//         return (
//           <div className={`cellWithStatus ${params.row.status}`}>
//             {params.row.status}
//           </div>
//         );
//       },
//     },
//   ];

//   return (
//     <div>
//       {/* Render your table using userColumns and userRows */}
//     </div>
//   );
// };

// export default UserTable;



// userColumns.js

import React from 'react';

const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'Project Name',
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export default userColumns;
