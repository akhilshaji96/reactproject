import Footer from "../Footer/Footer"
import Header from "../Header/Header"
function Aboutus(){
    return(
        <div>
            <Header />
                <div class="aboutus-section">
                    <div class="content">
                        <h1>About Us</h1>
                        <p>
                        We are passionate about baking and delivering delicious cakes to your doorstep.
                        </p>
                    </div>
                </div>
                <div className="aboutcontent">
                    <h3>A Tradition of 10 Years</h3>
                    <p>Ambrosia has been delighting customers and foodies alike with a heritage of baking for over 24 years.
                         Ambrosia has 3 outlets and 2 easy pickup counters. Our USP is that we focus on fresh and healthy food.
                          Every jaw-dropping recipe is made in our very own central kitchen. We follow such a format to ensure our 
                          respected customers get quality food, without the addition of any chemicals or additives. At Ambrosia, 
                          we serve a wide range of mouthwatering delicacies which include birthday cakes, various types of bread, 
                          Indian snacks, halwas, burgers, sandwiches, pizzas, and much more.</p>
                          <p>We understand that food preferences vary drastically from person to person and we have always strived to
                             serve a dynamic range of products to satisfy everyone’s varying palates. As far as quality is concerned,
                              every food product has been made with top-quality ingredients. These ingredients pass through multiple 
                              screening and testing procedures by our Quality Control team before they arrive at the outlet kitchen and
                               then on to your plates.</p>
                </div>
                <Footer />
        </div>
    )
}
export default Aboutus