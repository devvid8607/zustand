import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { devtools, persist } from "zustand/middleware";

export interface Course {
  id: string;
  description: string;
  completed: boolean;
}

interface CourseStore {
  courses: Course[];
  addCourse: (description: string) => void;
  removeCourse: (id: string) => void;
  toggleCompletedState: (id: string) => void;
  getCourse: (id: string) => Course | undefined;
}

export const useCourseStore = create<CourseStore>()(
  devtools(
    persist(
      (set, get) => ({
        // initial state
        courses: [],
        isLoading: false,
        error: null,
        // methods for manipulating state
        addCourse: (description: string) => {
          set((state) => ({
            courses: [
              ...state.courses,
              {
                id: uuidv4(),
                description,
                completed: false,
              } as Course,
            ],
          }));
        },
        removeCourse: (id) => {
          set((state) => ({
            courses: state.courses.filter((course) => course.id !== id),
          }));
        },
        toggleCompletedState: (id) => {
          set((state) => ({
            courses: state.courses.map((course) =>
              course.id === id
                ? ({ ...course, completed: !course.completed } as Course)
                : course
            ),
          }));
        },
        getCourse: (id) => {
          const courses = get().courses;
          return courses.find((course) => course.id === id);
        },
      }),
      {
        name: "courses",
      }
    )
  )
);
