import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import cssClass from '../../Layout/Carousel/ReactCarousel.module.css';

export const ReactCarousel = (props) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
          

    return (
        <div>
            <Carousel 
                additionalTransfrom={0}
                slidesToSlide={2}

                swipeable={false}
                draggable={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={props.deviceType === "mobile" ? true : false}
                
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-20-px"
                className={cssClass.ReactCarousel}
                >

            <div className={cssClass.Background1}>
<br/>
<br/>
<br/>
            <p style={{color:'white'}}>Slide 1</p> 
            </div>
            

            <div className={cssClass.Background2}>
            <br/>
<br/>
<br/>
            <p style={{color:'white'}}>Slide 2</p>    
            </div>

            <div className={cssClass.Background3}>
            <br/>
<br/>
<br/>
            <p style={{color:'white'}}>Slide 3</p> 
                        
            </div>

            <div className={cssClass.Background4}>
            <br/>
<br/>
<br/>
            <p style={{color:'white'}}> Slide 4</p> 
                
                                  
            </div>
            
        </Carousel>
                           
        </div>
    )
}

export default ReactCarousel;

