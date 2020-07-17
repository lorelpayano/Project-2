import React, { Component } from 'react';
import testimonial1 from '../images/Testimonial1.jpeg'
import testimonial2 from '../images/Testimonial2.jpg'
import testimonial3 from '../images/Testimonial3.jpg'
import Carousel from 'react-bootstrap/Carousel'

// class Testimonials extends Component {
//     render() {
//         return (
//             <div>
//                 <Carousel>
//                 <Carousel.Item>
//                 <img src={testimonial1} className="img-circle img-responsive" />
//                     <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                 <img src={testimonial2} className="img-circle img-responsive" />

//                     <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                 <img src={testimonial3} className="img-circle img-responsive" />

//                     <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 </Carousel>
//             </div>
//         );
//     }
// }

// export default Testimonials;

// import React, { Component } from 'react';
// import testimonial1 from '../images/Testimonial1.jpeg'
// import testimonial2 from '../images/Testimonial2.jpg'
// import testimonial3 from '../images/Testimonial3.jpg'
// import Carousel from 'react-bootstrap/Carousel'

class Testimonials extends Component {
    render() {
        return (
 <section className="testimonial text-center">
        <div className = 'backgroundcolor'>
            <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">

            <div className="heading green-heading">
                Real Testimonials!
            </div>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="testimonial4_slide">
                            
                            <img src={testimonial1} className="img-circle img-responsive" />
                            <p>"My diet is something I take very seriously. InfiniT Nutrition not only taught me how to live a healthy lifestyle, but it was also such a great resource when I am traveling."</p>
                            <h4>James Donahue</h4>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                            <img src={testimonial2} className="img-circle img-responsive" /><p>“Meal planning and discussing a healthy baseline diet (calories) were most helpful. I was able to add some food from food groups I’ve neglected and to be intentional about meals.  I trust it to have my best interest in mind.” </p>
                            <h4>McKenzie Chapman</h4>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                            <img src={testimonial3} className="img-circle img-responsive" />
                            <p>“I realized that I was not eating like I should be. I have changed my diet and am eating in a healthy way now. It really helped me to see that I needed to change my habits or I would suffer in the future.” </p>
                            <h4>Michael Page</h4>
                        </div>
                    </div>

                </div>
                
                <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#testimonial4" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </section> 

        );
    }
}

export default Testimonials;