// userRows.js

import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDe9qv2H3VDzw_7KKDeOk_rpYttTIR-Up8",
    authDomain: "myproject-d28ae.firebaseapp.com",
    projectId: "myproject-d28ae",
    storageBucket: "myproject-d28ae.appspot.com",
    messagingSenderId: "136309300823",
    appId: "1:136309300823:web:9474432a8ee66a80778d12",
    measurementId: "G-18EM7ZZX12"
  };

const UserRows = () => {
  const [userRows, setUserRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase();
      const dataRef = ref(database, 'myproject'); // Replace 'myproject' with your database reference

      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const rows = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
          setUserRows(rows);
        }
      });
    };

    fetchData();
  }, []);

  return userRows;
};

export default UserRows;
