import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <h2 className='font-semibold text-4xl p-6 text-slate-900'>Some Common question</h2>
            <div className="blog-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 m-10">
                <div className="blog-question bg-amber-200  p-6  rounded-md">
                    <h2 className='font-semibold text-2xl mb-3'>what is the purpose react router dom?</h2>
                    <p className='text-neutral-700'>React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.</p>
                </div>
                <div className="blog-question bg-amber-200  p-6 rounded-md">
                    <h2 className='font-semibold text-2xl mb-3'>How does context api work?</h2>
                    <p className='text-neutral-700'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p></div>
                <div className="blog-question bg-amber-200 p-6 rounded-md">
                    <h2 className='font-semibold text-2xl mb-3'>What is useref in react?</h2>
                    <p className='text-neutral-700'>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  React will set its .current property to the corresponding DOM node whenever that node changes.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;