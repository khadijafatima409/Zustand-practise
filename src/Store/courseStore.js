import create from "zustand";
import { devtools, presist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        // eslint-disable-next-line no-undef
        course.id === completed
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});
const useCourseStore = create(
  devtools(presist(courseStore, { name: "courses" }))
);
export default useCourseStore;
