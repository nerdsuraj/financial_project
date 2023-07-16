/* eslint-disable no-unused-vars */

import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/navbar";
import "./product.css";
import { useState, useEffect } from "react";
import { BusinessService } from "../../services/businessServices";
import Productcard from "../Productcard";


const Productpage = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categorylist, setCategorylist] = useState([]);
    const [cardList, setCardList] = useState([]);
    const [mastercardList, setMasterCardList] = useState([]);


    useEffect(() => {
        get_product_data();
        console.log(selectedCategory, "selectedCategory");
    }, []);



    const get_product_data = async () => {
        try {
            let postData = {
                email: "suraj"
            }
            console.log("🚀 ~ file: product.jsx:24 ~ constget_product_data= ~ postData:", postData)
            const response = await BusinessService().get_amazon_products(postData);
            console.log('response from the product list', response);
            if (response.status === 200) {
                console.log('response.data', response?.data);
                //filter out the category from the response.data.category and store in the variable
                setCategorylist(response?.data?.category);
                setCardList(response?.data?.results);
                setMasterCardList(response?.data?.results);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }
    console.log('categorylist', categorylist);
    console.log('cardList', cardList);


    const handleCategoryChange = (event) => {
        // console.log("selected category", selectedCategory);
        setSelectedCategory(event.target.value);
        const filteredProducts = mastercardList.filter((item) =>
            item?.category === event.target.value
        )
        setCardList(filteredProducts);
    };


    return (
        <>
            <Navbar />
            <div className="m-2 text-end">
                {/* <label htmlFor="category">Select Category:</label> */}
                <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="p-1">
                    <option value="">All</option>
                    {categorylist.map((category, index) => (
                        <option key={index} value={category} >
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="product_wrapper">
                {
                    categorylist.map((category, index) =>
                        // console.log(cardList.filter((card)=>card.category===category))
                        <>
                            {(selectedCategory === category || selectedCategory === "") &&
                                <>
                                    <h3 className="mb-0" style={{ paddingLeft: "12.5px" }} key={index}>{category}</h3>
                                    <hr></hr>
                                </>}

                            <div className="container-fluid product-container mb-5">
                                {
                                    
                                        cardList.filter((card) => card.category === category).map((eachCard, index) => {
                                            return (
                                            <Productcard {...eachCard} key={index} />)
                                        })
                        
                                }
                            </div>
                        </>
                    )
                }
            </div>
            <div className="container-lg card-container mb-5">
                {/* {cardList.map((card,index)=>(
                    <Productcard {...card} key={index}/>
                ))}     */}
            </div>
            <Footer />
        </>
    );

}

export default Productpage;