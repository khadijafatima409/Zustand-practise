import React from "react";
import useCourseStore from "../Store/courseStore";
const CourseList = () => {
  const { courses, removeCourse, toogleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
    })
  );
  return <div>CourseList</div>;
};

export default CourseList;
