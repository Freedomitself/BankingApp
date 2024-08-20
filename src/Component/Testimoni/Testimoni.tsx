import './Testimoni.css'
import { useState } from 'react';



const Testimoni = () => {
    const [blogs] = useState([
        {
            body: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
            author: "Sara T", id: 1
        },
        {
            body: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
            author: "John D", id: 2
        },
        {
            body: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
            author: "Emily G", id: 3
        }
    ]);


    return (
        <>
            <div>
                <div className='testimoni-div'>
                    <h1><span>Our </span> Testimonials</h1>
                    <div className="lorem-div">
                        <p>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
                        <div className='for-btn'>
                            <button>For Individuals</button>
                            <button>For Businesses</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="Blogs-div">
                {blogs.map((blog) => (
                    <div className="blogDiv" key={blog.id}>
                        <p>{blog.body}</p>
                        <h2>{blog.author}</h2>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Testimoni;   