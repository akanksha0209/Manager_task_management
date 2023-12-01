// import "./new.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";

// const New = ({ inputs, title }) => {
//   const [file, setFile] = useState("");

//   return (
//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
//         <div className="top">
//           <h1>{title}</h1>
//         </div>
//         <div className="bottom">
//           <div className="left">
//             <img
//               src={
//                 file
//                   ? URL.createObjectURL(file)
//                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//               }
//               alt=""
//             />
//           </div>
//           <div className="right">
//             <form>
//               <div className="formInput">
//                 <label htmlFor="file">
//                   Image: <DriveFolderUploadOutlinedIcon className="icon" />
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   style={{ display: "none" }}
//                 />
//               </div>

//               {inputs.map((input) => (
//                 <div className="formInput" key={input.id}>
//                   <label>{input.label}</label>
//                   <input type={input.type} placeholder={input.placeholder} />
//                 </div>
//               ))}
//               <button>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default New;



// import React, { useState } from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import {app } from '../../firebase';


// const storage = getStorage(app);

// const New = ({ inputs, title }) => {
//   const [file, setFile] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Upload image to Firebase Storage
//     const storageRef = ref(storage, `images/${file.name}`);
//     await uploadBytes(storageRef, file);

//     // Get the download URL of the uploaded image
//     const downloadURL = await getDownloadURL(storageRef);
//     setImageUrl(downloadURL);

//     // Now, you can use imageUrl or other form data to store in the database
//     // For example, you can use Firestore or Realtime Database
//   };

//   return (
//     <div className="new">
//       {/* ... (your existing code) */}
//       <form onSubmit={handleFormSubmit}>
//         {/* ... (your existing form code) */}
//         <div className="formInput">
//           <label htmlFor="file">
//             Image: <DriveFolderUploadOutlinedIcon className="icon" />
//           </label>
//           <input
//             type="file"
//             id="file"
//             onChange={handleFileChange}
//             style={{ display: "none" }}
//           />
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default New;




import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { app } from '../../firebase';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./new.scss";

const db = getFirestore(app);

const New = ({ title }) => {
  const [formData, setFormData] = useState({
    id: "",
    projectName: "",
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
    const docRef = await addDoc(collection(db, "myproject"), {
      ...formData,
    });

    console.log("Document written with ID: ", docRef.id);

    // Clear form fields after submission
    setFormData({
      id: "",
      projectName: "",
      status: "",
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
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </div>
            <div className="formInput">
              <label htmlFor="projectName">Project Name:</label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
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

export default New;
