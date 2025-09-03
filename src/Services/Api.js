import {BASE_URL} from './Constant'
// .....Response..../////
export const fetchCategoryApi=BASE_URL+"/cake/getAllCategory"
export const fetchcakebyCategoryApi=BASE_URL+"/cake/getCakeByCategoryId"
export const fetchgetAllCakeApi=BASE_URL+"/cake/getAllCake"
export const fetchgetcakeCartView=BASE_URL+"/cake/getcakeCartView"  
export const fetchgetcartcount=BASE_URL+"/cake/countOfCart"  
export const fetchgetAllComments=BASE_URL+"/cake/getAllComments"  
export const fetchgetOrderHistoryByUserId=BASE_URL+"/cake/getAllComments" 
// ....Add............////
export const fetchaddtoCart=BASE_URL+"/cake/addToCart" 
export const fetchaddregisterUser=BASE_URL+"/cake/registerUser"   
export const fetchcheckLogin=BASE_URL+"/cake/checkLogin" 
export const fetchaddComments=BASE_URL+"/cake/addComments"