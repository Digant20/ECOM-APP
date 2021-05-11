import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const SidebarNavLink = styled(Link)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
${'' /* padding: 20px; */}
margin-bottom: 5px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;
overflow: auto;
${'' /* &:hover{
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
} */}
`;


const SidebarNavLabel = styled.span`
margin-left: 16px;
color: #292929;
`;

const SidebarNavLabelSub = styled.span`
margin-left: 28px;
color: black;
opacity:0.8;
`;

const Icons  = styled.span `
margin-left: 0.8rem;
font-size: 1.6rem;
`;


const DropdownLink = styled(Link)`
background: #ffff;
height: 60px;
padding-left: 3rem;
display:flex;
align-items: center;
text-decoration: none;
color: grey;
font-size: 18px;

${'' /* &:hover{
    background: #632ce4;
    cursor: pointer;
} */}
`;


const NavigationItems = ({item}) => {

    const [subMenu, setSubMenu] = useState(false);
    const showSubMenu = () =>setSubMenu(!subMenu);

    return (
        <div>
        
             <SidebarNavLink to={item.path} onClick={item.subMenu && showSubMenu}>
                 <div>   
            <Icons>    {item.icon} </Icons>  <SidebarNavLabel>{item.title}</SidebarNavLabel>
                 </div>
                 <div >
                     {item.subMenu && subMenu ? item.iconOpened : item.subMenu ? item.iconClosed: null}
                 </div>
             </SidebarNavLink>
             {
                 subMenu && item.subMenu.map((item, index) =>{
                    return(
                        <DropdownLink to={item.path} key={index}>
                            <SidebarNavLabelSub>{item.title}</SidebarNavLabelSub>
                        </DropdownLink>
                        )
                 })
             }
      
        </div>
    )
}

export default NavigationItems;
