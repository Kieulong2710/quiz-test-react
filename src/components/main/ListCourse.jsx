import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CourseItem from "./CourseItem";

ListCourse.propTypes = {};

function ListCourse({item}) {
  
  return (
    <>
      {item.map((item) => {
        return <CourseItem key={item.id} item={item} />;
      })}      
    </>
  );
}

export default ListCourse;
