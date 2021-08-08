import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



function Imgslider() {
    return (
   <>
   
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block  img1"
      src="https://blog.internshala.com/wp-content/uploads/2020/10/Internshala-Training.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  img1"
      src="https://internshala.com//static/images/registration/student/facebook.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  img1"
      src="https://i.ytimg.com/vi/gr0Qmp97O4g/maxresdefault.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   </>
 
    )
}

export default Imgslider


