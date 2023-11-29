import React from "react";
import useCourseStore from "../Store/courseStore";
const CourseList = () => {
  const { courses, removeCourse, toogleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toogleCourseStatus: state.toggleCourseStatus,
    })
  );
  return (
    <>
      {courses.map((course, i) => {
        return (
          <React.Fragment key={i}>
            <li
              className={`course.item`}
              style={{
                backgroundColor: course.completed ? "#00ff0044" : "white",
              }}
            >
              <span className="course-item-col-1">
                <input
                  type="checkbox"
                  checked={course.completed}
                  onChange={(e) => {
                    toogleCourseStatus(course.id);
                  }}
                />
              </span>
              <span>{course?.title}</span>
              <button
                onClick={() => {
                  removeCourse(course.id);
                }}
                className="delete btn"
              >
                Delete
              </button>
            </li>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default CourseList;
