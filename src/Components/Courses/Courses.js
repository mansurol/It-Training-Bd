import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Courses.css';
import CoursesData from '../../Components/FakeData/CoursesData'
import CoursePartOne from './CoursePartOne';

const Courses = () => {
    const [CourseData ,setCourseData] = useState(CoursesData)
    return (
        <div className='BgColorCourse'>
            <Container>
               <h3 className='pt-5 pb-5 '>OUR COURSES</h3>

               <div className="friend-container pb-5">
                {
                     CourseData.map((CourseDatas)=> <CoursePartOne AllCourse={CourseDatas}/>)
                }
               </div>


            </Container>
        </div>
    );
};

export default Courses;
