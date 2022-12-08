import React from "react";
import PropTypes from "prop-types";
import Info from "./../components/main/Info";
import Search from "./../components/main/Search";
import Sort from "./../components/main/Sort";
import ListCourse from "./../components/main/ListCourse";
import Panigation from "./../components/main/Panigation";
import {useState,useEffect} from "react"
MainContainer.propTypes = {};

function MainContainer(props) {
  const [course, setCourse] = useState([]);
  const [keySearch, setKeySearch] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOnePage, setNumberOnePage] = useState(9);
  const indexOfLastPage = currentPage * numberOnePage;
  const indexOfFirstPage = indexOfLastPage - numberOnePage;
  const totalItem = course.length;
  var item = course.slice(indexOfFirstPage, indexOfLastPage);
  const handleNumberPage = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    fetch("https://636487bf7b209ece0f4810ac.mockapi.io/api/data")
      .then((response) => response.json())
      .then((res) => setCourse(res))
      .catch((e) => console.log(e));
  }, []);

   const handleSearch = (value)=>{
     setKeySearch(value)
   }
   const handleSort = (value)=>{
     setSortValue(value)
   }
  if(keySearch){
    item = course.filter(item=>item.name.toLocaleString().includes(keySearch.toLocaleString()))
  }
  console.log("Sort Value = ",sortValue)
  if(sortValue==="1"){
    item = item.sort((a,b)=> {
      return a.time-b.time
    })

  }
  if(sortValue==="2"){
    item = item.sort((a,b)=> {
      return a.point-b.point
    })

  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Info />
          <div className="col-10 col-md-9">
            <div className="row">
            <div className="col-8 col-md-8">
      
      <div className="row">
              <Search setKeySearch = {handleSearch}/>
              <Sort setSortValue = {handleSort}/>
              </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- List --> */}
              <ListCourse item={item}/>
            </div>
            <div className="row">
              {/* <!-- Panigation --> */}
              <div className="page" style={{position: "absolute", bottom: "0px" }}>
              <Panigation totalItem={totalItem}
              numberOnePage={numberOnePage}
              numberPage={handleNumberPage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContainer;
