import React from "react";
import { Course, useCourseStore } from "../store/CourseStore";

const CourseList: React.FC = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCompletedState,
    })
  );

  return (
    <>
      <ul>
        {courses.map((course: Course, i: number) => (
          <React.Fragment key={i}>
            <li
              className={`course-item`}
              style={{
                backgroundColor: course.completed ? "#00FF0044" : "white",
              }}
            >
              <span className="course-item-col-1">
                <input
                  checked={course.completed}
                  type="checkbox"
                  onChange={() => {
                    toggleCourseStatus(course.id);
                  }}
                />
              </span>
              <span>{course?.description}</span>
              <button
                onClick={() => {
                  removeCourse(course.id);
                }}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default CourseList;
