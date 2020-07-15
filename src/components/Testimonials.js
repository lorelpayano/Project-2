import React, { Component } from 'react';
import testimonial1 from '../images/Testimonial1.jpeg'
import testimonial2 from '../images/Testimonial2.jpg'
import testimonial3 from '../images/Testimonial3.jpg'

class Testimonials extends Component {
    render() {
        return (
<section class="testimonial text-center">
        <div class = 'backgroundcolor'>
            <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
            <div class="heading green-heading">
                Real Testimonials!
            </div>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="testimonial4_slide">
                            
                            <img src={testimonial1} class="img-circle img-responsive" />
                            <p>"My diet is something I take very seriously. InfiniT Nutrition not only taught me how to live a healthy lifestyle, but it was also such a great resource when I am traveling."</p>
                            <h4>James Donahue</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src={testimonial2} class="img-circle img-responsive" /><p>“Meal planning and discussing a healthy baseline diet (calories) were most helpful. I was able to add some food from food groups I’ve neglected and to be intentional about meals. Page is very approachable and knowledgeable. I trust it to have my best interest in mind.” </p>
                            <h4>McKenzie Chapman</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src={testimonial3} class="img-circle img-responsive" />
                            <p>“I realized that I was not eating like I should be. I have changed my diet and am eating in a healthy way now. It really helped me to see that I needed to change my habits or I would suffer in the future.” </p>
                            <h4>Michael Page</h4>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#testimonial4" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </section>

        );
    }
}

export default Testimonials;