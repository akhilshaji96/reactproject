import Categories from '../body/Categories'
import Featuredcarousel from '../body/Featuredcarousel'
import { useState,useEffect } from "react";
import axios from "axios";
import {fetchCategoryApi} from '../Services/Api'
import {fetchcakebyCategoryApi} from '../Services/Api'
function CakeByCategories(){
    const [category,setCategory] = useState([]);
    const [CakeBycategoryDetails, setCakeBycategoryDetails] = useState(null);
    const sendCakeCategories = async () => {
      try {
        const response = await axios.post(
          fetchCategoryApi,  
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        setCategory(response.data.data)
        const fetchedCategories = response.data.data;
        console.log("category Successfully:", response.data.data);

          if (fetchedCategories.length > 0) {
            console.log("fetchedCategories",fetchedCategories)
        const firstCategoryId = fetchedCategories[0].cake_category_id;
        CategoryDetails(firstCategoryId);
      }

      } catch (error) {
        if (error.response) {
          console.error("Server Error:", error.response);
        } else if (error.request) {
          console.error("No Response from Server");
        } else {
          console.error("Error:", error.message);
        }
      }
    };
    const CategoryDetails = async (categoryId) => {
    try {
      const response = await axios.get(`${fetchcakebyCategoryApi}/${categoryId}`);
      setCakeBycategoryDetails(response.data.data);
      console.log("Category Detail:", response.data);
    } catch (error) {
      console.error("Error fetching category by ID:", error);
    }
  };
useEffect(() => {


    sendCakeCategories(); 
  }, []);

    return(
        <div>
            <Categories categories={category} />
            <Featuredcarousel cakebydetails={CakeBycategoryDetails} />
        </div>

    )

}
export default CakeByCategories