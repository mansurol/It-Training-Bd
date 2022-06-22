import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Blog.css'
import BlogData from '../../Components/FakeData/BlogData'
import BlogPartOne from './BlogPartOne';
const Blog = () => {
    const [BlogDatas , setBlogData] = useState(BlogData)
    return (
        <div>
            <Container>
                <div>
                   
                    <div>
                     <h3 className='text-center pt-5 pb-5 BlogContentStyle'>Software Quality Assurance Tips, Tools,<br/> Tutorials, Blogs and Resources</h3>
                    </div>

                    <div className="friend-container pb-5">
                {
                     BlogDatas.map((AllBlogDatas)=> <BlogPartOne BlogContent={AllBlogDatas}/>)
                }
               </div>
                    
                </div>
           </Container>
        </div>
    );
};

export default Blog;