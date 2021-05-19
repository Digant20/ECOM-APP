import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Footer from './footer/Footer';
import SideNav from '../Navigation/Sidebar/SideNav';
import WelcomeCard from './WelcomeCard.js';
import ReactCarousel from '../../components/Layout/Carousel/ReactCarousel';
import BodyContent from '../BodyContent/BodyContent';


const Layout = (props) =>{

    
    

    return(<Auxiliary >
        <div>
        <SideNav />
            {/* <SideNav /> <WelcomeCard />
                        <ReactCarousel />
                        <BodyContent />
                      {/* <CarouselSlider slides={CarouselData}/> 
                      <Footer /> 
                    */}
        </div>


        

        
        {/*  or use this footer inside the <Layout> </Layout> */}
    </Auxiliary>
    );
    
   

}

export default Layout;