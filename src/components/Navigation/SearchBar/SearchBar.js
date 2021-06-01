import React,{Component} from 'react';
import {FiSearch} from 'react-icons/fi';
import {IoPersonOutline, IoTrendingUpOutline} from 'react-icons/io5';
import {BsBag} from 'react-icons/bs';
import {connect} from 'react-redux';
import { IconContext } from 'react-icons/lib';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {withStyles} from '@material-ui/core/styles';


import cssClass from '../SearchBar/SearchBar.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import cssClass2 from '../../BodyContent/CartItems.module.css';
import {updateCartItemUnits} from '../../../store/actions/CartAction';
import { bindActionCreators, compose } from 'redux';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';


const useStyles = theme=>({
    
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginLeft: '8px',
        
        
      }
});


class SearchBar extends Component {
    
    
    
    state={
        searchedTerm: '',
        cartClickedState: true,
        counter:0
    }

    
   

   handleUserInput = (event) =>{            
        this.setState({searchedTerm: event.target.value});      
        }


         showCartHandler = () => {
             
            this.setState({cartClickedState: !this.state.cartClickedState});
        }

        handleIncrement= () =>{
            this.setState({counter: this.state.counter + 1});
        }

        handleDecrement= () =>{
            this.setState({counter: this.state.counter - 1});
        }

         
   

 render() {
    

    const {classes} = this.props;

    console.log("inside SearchBar: ",this.props.cartItems);


    let attachedClasses = [cssClass2.SideNav, cssClass2.Close];

    if(this.state.cartClickedState){
        attachedClasses = [cssClass2.SideNav, cssClass2.Open];
    }

    /*

          id: 2552,
          name: "Potted Rosemary",
          description: "Grow your own herbs at home! Our rosemary brings out the best of any roasted dishes and panfried meats. Plucked from the farms into a pot for you. Comes with a detailed care instruction card.",
          productImage: "https://ecom.xircular.io/images/Singapore/POTTEDROSEMARY.PNG",
          inventories: [],
          productCategory: {
              id: 1551,
              name: "Potted Plants",
              categoryImage: "https://ecom.xircular.io/images/Singapore/POTTEDGOODNESS.PNG",
              description: "-",
              archieved: false
          },
       
    */

          let inc = 0;

      const cartElement = (

        <div>
        <IconContext.Provider value={ {color:'#292929'} }>          
        
        {/* <nav className={cssClass.SideNav} style={{left: cssStyle}}   oldSidebarState={oldSidebarState} > */}

        <nav className={attachedClasses.join(' ')}    cartClickedState={this.state.cartClickedState} >
            
            <div>
                    <div style={{marginTop: '40px', marginLeft: '20px', color:'black'}}>
                            
                            <span style={{fontSize: '22.5px'}}>Cart</span>
                            
                            <NavLink to="#" className={cssClass2.CloseIcon}>
                                <AiOutlineClose onClick={this.showCartHandler} />
                            </NavLink>
                    </div>

                    <div style={{backgroundColor:'#F2F2F2', width:'60.2vh',  padding: '12px', marginTop: '35px'}}>
                        <span style={{color: 'grey'}}>Total Amount: </span> <span style={{float:'right', marginRight: '1px', color:'green'}}>$20.7</span>
                    </div>
                    
            <div className={cssClass2.cartOverflow}>

                {this.props.cartItems.map((item) => {
    
                    
                    inc++;
                    let itemTotal = 0;
                    item.inventories.map(it=>  itemTotal = it.price * inc);
                   
                   
                    return(
                        <div style={{maxHeight: '100px', minHeight: '50px'}}>
                            <div key={item.id} style={{padding: '5px',marginLeft: '5px', marginTop:'20px'}}>
                            
                                <div>
                                    <img src={item.productImage} style={{width: '98px', height: '98px', float: 'left', padding: '8px'}} alt={item.name} />
                                    
                                    <div style={{display: 'flex'}}>
                                        <div style={{display: 'flex', marginTop: '15px'}}>
                                            <p style={{marginLeft: '8px', wordBreak: 'break-all', opacity: '0.9'}}>{item.name}</p> <span style={{marginLeft: '38px', color: 'green'}}>${itemTotal}</span><br/>
                                        </div>
                                    </div>

                                    <div style={{marginTop: '12px'}}> 

                                        {   
                                             item.inventories.map((inventoryItems) =>{

                                                 return(            
                                                        <span style={{marginLeft: '8px',color: 'grey'}}>Unit Price: ${inventoryItems.price}</span> 
                                                        )
                                                })
                                        
                                        }
                                        <div>
                                        <ButtonGroup style={{marginLeft:'170px', width: 'auto',  backgroundColor:'black', color: 'white'}} size="small" aria-label="small outlined button group">
                                            <Button style={{color: 'white', fontSize: '16px'}} onClick={() => this.props.updateCartItemUnits({id: item.id, units: item.units+1})}>+</Button>
                                            <Button style={{color: 'white'}} disabled>{item.units}</Button>
                                        {item.units > 1  ?  <Button style={{color: 'white', fontSize: '16px'} } onClick={() => this.props.updateCartItemUnits({id: item.id, units: item.units-1})}>-</Button> : <Button style={{color: 'white', fontSize: '16px'} } onClick={() => this.props.updateCartItemUnits({id: item.id, units: item.units-1})} disabled>-</Button>}
                                        </ButtonGroup>
                                        </div>
                                    </div>
                                </div>
                        
                            </div>
                            </div>
                        
                            )
                })}

            </div>
                     

                        <div className={cssClass2.onHoverCheckOutButton}>
                            <Button style={{marginTop:'60px',color: 'white', fontFamily: 'Arial', fontSize: '12px', fontWeight:'700', textDecoration: 'none solid rgb(255, 255, 255)', justifyContent: 'center', marginLeft:'28px', width: '400px',height: '50px', padding: '8px 16px 8px 16px', backgroundColor:'#2E2E2E'}} onClick={this.handleIncrement}>Proceed To Checkout</Button>
                        </div>
            </div>

            
        </nav>
        

        </IconContext.Provider>                                                   

 </div>

             );

        return (
        <Auxiliary >
            <div  className={cssClass.SearchBar}>
                    <FiSearch className={cssClass.Icon}/>
                    <input type="text"
                            className={cssClass.TextBox} 
                            placeholder="What are you looking for?" 
                            onChange={this.handleUserInput}
                            value={this.state.searchedTerm}
                            />
            </div> 

            <div className={cssClass.HeaderIcons}>
                
                  <div>
                    <IoPersonOutline className={cssClass.Icons}/>

                    <BsBag className={cssClass.Icons} onClick={this.showCartHandler}/>   
                  </div>
                  
            </div>

            {this.state.cartClickedState ? cartElement: null}
           
        </Auxiliary>
        
        )
    
}
    
}

const mapStateToProp = ({cartItems}) =>{
    return{
        cartItems
    }
}

const mapActionsToProps = (dispatch) =>{
    return bindActionCreators({
        updateCartItemUnits
    }, dispatch)
}

export default compose(connect(mapStateToProp, mapActionsToProps), withStyles(useStyles))(SearchBar);


    //{ this.props.cartItems.map(product => {
    //    return(<Card className={classes.root} key={product.id} justify="center">

    //             <CardContent>
    //                 <img src={product.productImage} alt={product.name} className={cssClass2.Images}/>

    //                 <Typography className={classes.productName} color="textSecondary">
    //                     {product.name}, 
    //                 </Typography>
                
    //             </CardContent>
    //                 {/* <CardActions>
    //                     <Button size="small">Learn More</Button>
    //                 </CardActions> */}
    //         </Card>)
    //  })
    //}
