// import React, { useState } from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import { app } from '../../firebase';
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import "./form.scss";

// const db = getFirestore(app);

// const Form = ({ title }) => {
//     const [formData, setFormData] = useState({
//         projectName: "", // Add projectName to formData
//         member: [
//           {
//             mem_id: "",
//             mem_name: "",
//             mem_email: "",
//             status: ""
//           }
//         ]
//       });
    
//       const handleInputChange = (index, fieldName, value) => {
//         const updatedMembers = [...formData.member];
//         updatedMembers[index][fieldName] = value;
    
//         setFormData({
//           ...formData,
//           member: updatedMembers
//         });
//       };
    
//       const addMember = () => {
//         setFormData({
//           ...formData,
//           member: [
//             ...formData.member,
//             {
//               mem_id: "",
//               mem_name: "",
//               mem_email: "",
//               status: ""
//             }
//           ]
//         });
//       };
    
//       const handleChange = (e) => {
//         setFormData({
//           ...formData,
//           [e.target.name]: e.target.value
//         });
//       };
    
//       const handleFormSubmit = async (e) => {
//         e.preventDefault();
    
//         // Store form data in Firestore
//         const docRef = await addDoc(collection(db, "managermember"), {
//           ...formData,
//         });
    
//       return (
//         <form onSubmit={handleSubmit}>
//           <div className="formInput">
//             <label htmlFor="projectName">Project Name:</label>
//             <input
//               type="text"
//               id="projectName"
//               name="projectName"
//               value={formData.projectName}
//               onChange={handleChange}
//             />
//           </div>
    
//           {formData.member.map((member, index) => (
//             <div key={index}>
//               <label>
//                 Member ID:
//                 <input
//                   type="text"
//                   value={member.mem_id}
//                   onChange={(e) => handleInputChange(index, 'mem_id', e.target.value)}
//                 />
//               </label>
//               <label>
//                 Member Name:
//                 <input
//                   type="text"
//                   value={member.mem_name}
//                   onChange={(e) => handleInputChange(index, 'mem_name', e.target.value)}
//                 />
//               </label>
//               <label>
//                 Member Email:
//                 <input
//                   type="email"
//                   value={member.mem_email}
//                   onChange={(e) => handleInputChange(index, 'mem_email', e.target.value)}
//                 />
//               </label>
//               <label>
//                 Status:
//                 <input
//                   type="text"
//                   value={member.status}
//                   onChange={(e) => handleInputChange(index, 'status', e.target.value)}
//                 />
//               </label>
//             </div>
//           ))}
    
//           <button type="button" onClick={addMember}>
//             Add Member
//           </button>
    
//           <button type="submit">
//             Submit
//           </button>
//         </form>
//       );
//     };
    
// export default Form;



import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { app } from '../../firebase';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./form.scss";

const db = getFirestore(app);

const Form = ({ title }) => {
  const [formData, setFormData] = useState({
    projectid: "",
    
        mem_id: "",
        mem_name: "",
        mem_email: "",
        status: "",
      
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Store form data in Firestore
    const docRef = await addDoc(collection(db, "managermember"), {
      ...formData,
    });

    console.log("Document written with ID: ", docRef.id);

    // Clear form fields after submission
    setFormData({
        projectid:"",
    
        mem_id: "",
        mem_name: "",
        mem_email: "",
        status: ""
    });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="formWrapper">
          <h1>{title}</h1>
          <form className="newForm" onSubmit={handleFormSubmit}>
            <div className="formInput">
              <label htmlFor="id">Project ID:</label>
              <input
                type="text"
                id="projectid"
                name="projectid"
                value={formData.projectid}
                onChange={handleChange}
              />
            </div>
            <div className="formInput">
              <label htmlFor="projectName">Member ID:</label>
              <input
                type="text"
                id="mem_id"
                name="mem_id"
                value={formData.mem_id}
                onChange={handleChange}
              />
            </div>
            <div className="formInput">
              <label htmlFor="status">Member Name: </label>
              <input
                type="text"
                id="mem_name"
                name="mem_name"
                value={formData.mem_name}
                onChange={handleChange}
              />
            </div>
            <div className="formInput">
              <label htmlFor="status">Member Email: </label>
              <input
                type="text"
                id="mem_email"
                name="mem_email"
                value={formData.mem_email}
                onChange={handleChange}
              />
            </div>
            <div className="formInput">
              <label htmlFor="status">Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
