import { Row, Col } from "reactstrap"
import * as FaIcons from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import {Nav, NavItem,Dropdown,DropdownItem,DropdownToggle,DropdownMenu,NavLink,} from 'reactstrap';
import { useState } from "react";

function Categories(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const [activeTab, setActiveTab] = useState("birthday");
      const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // const IconComponent=FaIcons
  // const IconComponent=FaIcons
  // console.log('ccccccc',categories)

  const DynamicIcon = ({ iconName, ...props }) => {
  const IconComponent = FaIcons[iconName];
  return IconComponent ? <IconComponent {...props} /> : null;
}
const colors=["#a855f7","#f12323"]
return (
        <div>
        
            <div className="categories">
                <h2>Our Categories</h2>
                <div className="ourcategories">
                    <Nav justified pills  className="custom-nav">
                    <Row>
                        {props.categories.map((item,i) => (
                        <Col md='3'>
                            <NavItem className="selected-categories">
                                <NavLink style={{height:'210px',backgroundColor:'#f9f6f0',color:'#555'}}
                                    
                                    className={activeTab === "birthday" ? "active-tab" : ""}
                                    onClick={() => handleTabClick("birthday")}
                                >
                                    <div className="categoriesimg" >
                                      {/* style={colors[i]} */}
                                      <DynamicIcon iconName={item.category_icon} size={32} color="purple" />
                                  
                                       {/* {FaIcons["FaBirthdayCake"]}   */}
                                       {/* <FaBirthdayCake /> */}
                                    </div>
                                    <h5>{item.category_name}</h5>
                                    <p>Make birthdays special with our custom designs</p>
                                </NavLink>
                                </NavItem>
                        </Col>
                        ))}
                      
                    </Row>
                     </Nav>
                     
                </div>

            </div>
        </div>
    )
}
export default Categories