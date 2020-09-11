import React from 'react'
import CourseCard from '../Molecules/CourseCard';

const CourseGrid = ({ courses }) => (
    <div className="ed-grid m-grid-4">
        { courses.length === 0
            ? <h1 className="t3">Cargando...</h1>
            : courses.map((course) => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    image={course.image}
                    price={course.price}
                    professor={course.professor}
                />
            ))
        }
    </div>
);

export default CourseGrid;