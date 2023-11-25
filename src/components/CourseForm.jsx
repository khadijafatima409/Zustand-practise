import React, { useState } from "react";
import useCourseStore from "../Store/courseStore";
const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");
  console.log("CourseForm Rendered");
  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("please add course title");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    });
    setCourseTitle("");
  };
  return (
    <div className="form-container">
      <input
        className="form-input"
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleCourseSubmit();
        }}
        className="form-submit-btn"
      >
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
