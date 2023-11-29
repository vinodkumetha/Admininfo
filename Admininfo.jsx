import React from "react"
import Cards from "./Cards"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./Images/img1.jpeg"
import img2 from "./Images/img2.jpeg"
import img3 from "./Images/img3.jpeg"
// import img4 from "./Images/img4.jpg"
import img5 from "./Images/img5.jpeg"
// import img6 from "./Images/img6.jpeg"
// //import img7 from "./Images/img7.jpg"
// import img13 from "./Images/img13.jpg"
// import img14 from "./Images/img14.jpg"
// import img15 from "./Images/img15.jpg"
// import img16 from "./Images/img16.jpg"

const Admininfo = () => {

  const adminDetails=[
{"id":1,
  "name":"Adi",
  "description":"Adi,  Director at AK & Technical Expert.",
  "imgUrl":img1
}
,{
  "id":2,
  "name":"Khalandar",
  "description":"Khalandar, Director at AK & Writer Expert as a subject",
  
},{
  "id":3,
  "name":"Naveen",
  "description":"Java Developer & Marketing Head"
},{
  "id":4,
  "name":"Vindo Kumar K",
  "description":"Operation Head, Technical Subject Matter Expert",
  "imgUrl":img2
},{
  "id":5,
  "name":"Sudheer",
  "description":"Operation Head & Technical Expert",
  "imgUrl":img5
},{
  "id":6,
  "name":"Harika",
  "description":"Front-End Architecture"
},{
  "id":7,
  "name":"Mounica",
  "description":"Front-End Architecture"
},{
  "id":8,
  "name":"Harish k",
  "description":"UI Developer"
},{
  "id":9,
  "name":"Harish B",
  "description":"Front End Developer",
  "imgUrl":img3
},{
  "id":10,
  "name":"Prakash",
  "description":"Software Developer"
},{
  "id":11,
  "name":"Priya k",
  "description":"Front End Developer"
},{
  "id":12,
  "name":"Sushmita",
  "description":"Content Writer"
}
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3
  };

  return (
    <>
    <ul className="d-flex justify-content-around gap-3 m-3" style={{flexWrap:"wrap",listStyleType:"none"}}>
    <Slider {...settings} className="slider">
    {adminDetails.map(each =>(
      <li key={each.id} className="p-3">
      <Cards Image={each.imgUrl} description={each.description} name={each.name} />
      </li>
    ))}
    </Slider>
    </ul>     
    </>
  )
}


export default Admininfo