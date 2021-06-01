import axios from 'axios';
import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {FaAlignRight, FaCartPlus} from 'react-icons/fa';
import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';

import {addToCart, updateCartItemUnits} from '../../store/actions/CartAction';
import cssClass from '../BodyContent/Items.module.css';
import Spinner from '../UI/Spinner/Spinner';

const useStyles = theme=>({
    root: {
        maxWidth: 341,
       // minWidth:290,
       maxHeight: 400,
        // maxHeight: 330,
        margin: 9.8,
      },
      
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        
        
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
});



class Items extends Component{

     state={
         token: null,
         dataItems:[],
         isMounted: true,
         isLoading: false,
         unitName: null,
        //  cartData: 
        //      {
        //       items: {},
        //       units: 0
        //     }
         
       
    }
     
    
    async componentDidMount(){

        this.setState({
            isLoading: true  
            });

        //get the jwt token
        const body = {username: 'guest', password: 'user'};
        const authApi = "/2/authenticate";

        const resp= await axios.post(authApi, body);
        this.setState({token: resp.data.id_token});
            
        

       //get the product list
        const api = "/products";
        const jwtToken ='Bearer '+this.state.token;

        axios.get(api, {
                          headers: {
                            'Authorization': jwtToken,
                            'Accept' : '*/*',
                            'Content-Type': 'application/json',
                            'App-Token' : 'A14BC'
                            }
                    })
                    .then(product => {
                        //console.log("token inside the get method: ", this.state.token);
                        console.log("product: ",product.data);
                        this.setState({
                            dataItems: product.data,
                            isMounted: false,
                            isLoading: false,
                            
                            })
                        })
                        .catch(error =>{
                            this.setState({
                                isLoading: false,
                                isMounted: false, 
                                });
                              });

     }
        
     handleChange = (event) => {
        this.setState({
                unitName: event.target.value
                });
      };


      addToCartAction = (product) =>{
    //       var Data = {...this.state.cartData}
    //       Data.items = product;
    //       Data.units = unit;
    //   this.setState({ cartData: Data });
    //   console.log("inside addToCartAction: ",this.state.cartData );
      this.props.addToCart(product);
    }

 

    render(){

        //getting data from the redux store
        console.log("from the redux store",this.props.cartItems);

        const {classes} = this.props;

        //conditional rendering

        if(this.state.isLoading){
            return <Spinner />
        }else{
            return (

                this.state.dataItems.map((product)=>{
                    
    
                    if(product.inventories.length !== 0){

                        
                       
                    return(
   
                            <Card className={classes.root} key={product.id} justify="center">
                                <CardContent>
                                    <Tooltip title="Add to cart" placement="top">
                                        <button className={cssClass.CartButton} onClick={() => this.addToCartAction(product)}><FaCartPlus /></button>  
                                    </Tooltip>
                                    <img src={product.productImage} alt={product.name} className={cssClass.Images}/>
                                   
                                           { 
                                                product.inventories.map((inventoryItems)=>(
                                                    <div>
                                                        <h4 className={cssClass.RupeeSymbol}>&#x24; {inventoryItems.price}</h4>   
                                                        {/* {product.inventories.length > 1 ? this.setState({unitNameArray: inventoryItems.unitName}) : null} */}

                                                        {product.inventories.length > 1 ?  <FormControl variant="outlined" className={classes.formControl}>
                                                                                                <InputLabel id="demo-simple-select-outlined-label">Unit</InputLabel>
                                                                                                <Select
                                                                                                labelId="demo-simple-select-outlined-label"
                                                                                                id="demo-simple-select-outlined"
                                                                                                value={inventoryItems.unitName}
                                                                                                onChange={this.handleChange}
                                                                                                label="Unit"
                                                                                                >
                                                                                                
                                                                                                <MenuItem value={inventoryItems.unitName}> {inventoryItems.unitName}  </MenuItem>
                                                                                            
                                                                                                </Select>
                                                                                            </FormControl>
                                                                                            
                                                                                    :<span style={{float: 'right', color:'grey'}}>{inventoryItems.unitName}</span>
                                                         }
                                                        
                                                        
                                                        
                                                    </div>
    
                                                    ))            
                                            }
                                     <Typography className={classes.productName} color="textSecondary">
                                        {product.name}, 
                                     </Typography>
                               
                                </CardContent>
                                {/* <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}
                             </Card>
    
                         )
                            }
    
                            
                            return null;
    
                     } )
   
            )
            
        }

        
    }
    
}



const mapActionsToProps = (dispatch) =>{
    return bindActionCreators( {
        addToCart
    }, dispatch )

}

export default compose(connect(null, mapActionsToProps), withStyles(useStyles))(Items);



/* 
{this.setState({unitNameArray: inventoryItems.unitName})}
  {product.inventories.length > 1 ?  <select style={{float:'right'}}> <option value={inventoryItems.unitName}>{inventoryItems.unitName}</option> </select> :<span>,{inventoryItems.unitName}</span>} 


{product.inventories.length > 1 ?  <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Unit</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={inventoryItems.unitName}
                                        onChange={this.handleChange}
                                        label="Unit"
                                        >
                                        
                                        <MenuItem value={inventoryItems.unitName}> {inventoryItems.unitName}  </MenuItem>
                                    
                                        </Select>
                                    </FormControl>
                                    
                            :<span>,{inventoryItems.unitName}</span>
                }

*/