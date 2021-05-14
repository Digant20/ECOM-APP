import axios from 'axios';
import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import {FaCartPlus} from 'react-icons/fa';

import cssClass from '../BodyContent/Items.module.css';
import fruits from '../../assets/images/fruits.jpg';
import Spinner from '../UI/Spinner/Spinner';

const useStyles = theme=>({
    root: {
        maxWidth: 341,
       // minWidth:290,
       maxHeight: 400,
        // maxHeight: 330,
        margin: 9.8,
      },
      title: {
        fontSize: 12,
      },
      pos: {
        marginBottom: 10,
      },
});



class Items extends Component{

     state={
         token: null,
         dataItems:[],
         isMounted: true,
         isLoading: false,
         
    }
     
    
    async componentDidMount(){

        this.setState({
            isLoading: true  
            });

        //get the jwt token
        const body = {username: 'guest', password: 'user'};
        const authApi = "https://ecom.xircular.io/v2/api/2/authenticate";

        const resp= await axios.post(authApi, body);
        this.setState({token: resp.data.id_token});
            
        

       //get the product list
        const api = "https://ecom.xircular.io/v2/api/products";
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
        

    render(){

        const {classes} = this.props;

        //conditional rendering
        let ProductCard = "the card";
        
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
                                        <button className={cssClass.CartButton}><FaCartPlus /></button>  
                                    </Tooltip>
                                    <img src={product.productImage} alt={product.name} className={cssClass.Images}/>
                                       
                                           { 
                                                product.inventories.map((inventoryItems)=>(
                                                    <div>
                                                        <h6 className={cssClass.RupeeSymbol}>&#x24; {inventoryItems.price}</h6>   
                                                                                
                                                        <Typography className={classes.pos} color="textSecondary">
                                                            {product.name} {product.inventories.length > 1 ? <select style={{float:'right'}}> <option value={inventoryItems.unitName}>{inventoryItems.unitName}</option> </select> :<span>,{inventoryItems.unitName}</span>} 
                                                        </Typography> 
                                                    </div>
    
                                                    ))            
                                            }
                                    
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

export default withStyles(useStyles)( Items);
