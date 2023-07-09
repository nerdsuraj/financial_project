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


    useEffect(() => {
        get_product_data();
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
                console.log('response.data', response.data);
                //filter out the category from the response.data.category and store in the variable
                setCategorylist(response.data.category);
                setCardList(response.data.results);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }
    console.log('categorylist', categorylist);
    console.log('cardList', cardList);


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };


    return (
        <>
            <Navbar />
                <div className="m-2">
                    {/* <label htmlFor="category">Select Category:</label> */}
                    <select id="category" value={selectedCategory} onChange={handleCategoryChange}  className="p-1">
                        <option value=""> Select Category </option>
                        {categorylist.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="container-lg card-container mb-5">
                {cardList.map((card,index)=>(
                    <Productcard {...card} key={index}/>
                ))}    
                </div>
            <Footer />
        </>
    );

}

export default Productpage;