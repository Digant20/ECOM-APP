import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Footer from './footer/Footer';
import SideNav from '../Navigation/Sidebar/SideNav';
import Main from '../Layout/Main';
import ReactCarousel from '../../components/Layout/Carousel/ReactCarousel';
import BodyContent from '../BodyContent/BodyContent';


const Layout = (props) =>{

    
    

    return(<Auxiliary >
        <div>
            <SideNav /> <Main />
                        <ReactCarousel />
                        <BodyContent />
                      {/* <CarouselSlider slides={CarouselData}/> */}
                      <Footer />
        </div>


        

        
        {/*  or use this footer inside the <Layout> </Layout> */}
    </Auxiliary>
    );
    
   

}

export default Layout;