import React from 'react'
import * as FAicons from 'react-icons/fa';
import * as AIicons from 'react-icons/ai';
import * as IOicons from 'react-icons/io';
import * as RIicons from 'react-icons/ri';
import * as GIicons from 'react-icons/gi';
import * as CGicons from 'react-icons/cg';
import { IoFishOutline } from "react-icons/io5";


const SideNavData =[
   
    {
        title: 'Vegetables',
        path: '/vegetables',
        icon: <FAicons.FaCarrot />,
        iconClosed: <RIicons.RiArrowDownSFill />,
        iconOpened: <RIicons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Herbs',
                path: '/vegetables/herbs',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Packed Vegetables',
                path: '/vegetables/packed-veg',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Fresh Vegetables',
                path: '/vegetables/fresh-veg',
                // icon: <IOicons.IoIosPaper />,
            }
        ]
    },
    {
        title: 'Organic',
        path: '/organic',
        icon: <GIicons.GiClothJar />,
        iconClosed: <RIicons.RiArrowDownSFill />,
        iconOpened: <RIicons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Spice',
                path: '/organic/spice',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Honey',
                path: '/organic/honey',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Oil',
                path: '/organic/oil',
                // icon: <IOicons.IoIosPaper />,
            }
        ]
    },
    {
        title: 'Snacks & Beverages',
        path: '/snacks-beverages',
        icon: <CGicons.CgCoffee />,
        iconClosed: <RIicons.RiArrowDownSFill />,
        iconOpened: <RIicons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Juice',
                path: '/snacks-beverages/juice',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Coffee',
                path: '/snacks-beverages/coffee',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Tea',
                path: '/snacks-beverages/tea',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Fizzy Drinks',
                path: '/snacks-beverages/fizzy-drinks',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Crisp',
                path: '/snacks-beverages/crisp',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Chocolates',
                path: '/snacks-beverages/chocolates',
                // icon: <IOicons.IoIosPaper />,
            }
        ]
    }
    ,
    {
        title: 'Fish & Meat',
        path: '/fish-meat',
        icon: <IoFishOutline />,
        iconClosed: <RIicons.RiArrowDownSFill />,
        iconOpened: <RIicons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Packed',
                path: '/fish-meat/packed',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Fish Counter',
                path: '/fish-meat/fish-counter',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Poultry Counter',
                path: '/fish-meat/poultry-counter',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Meat Counter',
                path: '/fish-meat/meat-counter',
                // icon: <IOicons.IoIosPaper />,
            }
        ]
    },
    {
        title: 'Dairy',
        path: '/dairy',
        icon: <GIicons.GiWaterBottle />,
        iconClosed: <RIicons.RiArrowDownSFill />,
        iconOpened: <RIicons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Yogurt',
                path: '/dairy/yogurt',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Milk',
                path: '/dairy/milk',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Cheese',
                path: '/dairy/cheese',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Eggs',
                path: '/dairy/eggs',
                // icon: <IOicons.IoIosPaper />,
            }
        ]
    },
    {
        title: 'Bakery & Pastry',
        path: '/bakery-pastry',
        icon: <RIicons.RiCake3Line />,
        iconClosed: <RIicons.RiArrowDownSFill />,
        iconOpened: <RIicons.RiArrowUpSFill />,
        subMenu: [
            {
                title: 'Buns & Rolls',
                path: '/bakery-pastry/buns-rolls',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Pies & Cakes',
                path: '/bakery-pastry/pies-cakes',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Muffins & Pastries',
                path: '/bakery-pastry/muffins-pastries',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'Brown Bread',
                path: '/bakery-pastry/brown-bread',
                // icon: <IOicons.IoIosPaper />,
            },
            {
                title: 'White Bread',
                path: '/bakery-pastry/white-bread',
                // icon: <IOicons.IoIosPaper />,
            }
        ]
    }





];
export default SideNavData

