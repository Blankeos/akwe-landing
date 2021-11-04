import React, { useEffect, useState } from "react";

import Fuse from "fuse.js";

function SearchPage({ data }) {
  const [filteredStudents, setFilteredStudents] = useState(data.students);
  const [nameInput, setNameInput] = useState("");

  const fuse = new Fuse(data.students, {
    keys: ["lastName", "firstName"],
    threshold: 0.4,
  });

  function fuzzySearch(value) {
    if (value.length <= 0) {
      return data.students.map((student) => ({ item: student }));
    }

    return fuse.search(value);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFilteredStudents(fuzzySearch(nameInput));
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [nameInput]);

  function handleNameInputChange(e) {
    setNameInput(e.target.value);
  }
  return (
    <div>
      <h1>Search Page</h1>
      <input onChange={handleNameInputChange} />
      {/* <p>{JSON.stringify(filteredStudents)}</p> */}
      <div>
        {filteredStudents.map((student) => {
          return (
            <p>
              {student.item && student.item.lastName},{" "}
              {student.item && student.item.firstName}
            </p>
          );
        })}
      </div>
      {/* <p>{JSON.stringify(filteredStudents)}</p> */}
    </div>
  );
}

export default SearchPage;

import fetchData from "../data/fetchData";
export const getStaticProps = async (context) => {
  const data = await fetchData();
  return {
    props: {
      data: data,
    },
  };
};
