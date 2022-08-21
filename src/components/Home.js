import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import bg from '../assest/bg.jpg';
import bg2 from '../assest/bg2.jpg';
import { useDispatch, useSelector } from 'react-redux';

import Card from './card/Card';
import Slide from './Slide';

const Home = () => {
  const name = useSelector((state) => state.user.userDetail.name);

  const login = useSelector((state) => state.user.login);
  console.log(login);
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <>
      <div>
        {/* <div style={{ position: 'absolute', top: "50%", width: "100%", textAlign: "center" }}>
          <h3>Welcome</h3> */}
        {/* <h1 > 
            {login ?
           name :
          <span>we are mern developer</span>}
          </h1> */}
        <Slide />

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              {' '}
              <Card
                title="helo thsi is abuaka"
                name="sofa"
                price="4731"
                url={bg}
                slug="raza"
              />
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              {' '}
              <Card
                title="helo thsi is abuaka"
                name="sofa"
                price="4731"
                url={bg2}
                slug="ansari"
              />
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              {' '}
              <Card
                title="hello this is abuakar"
                name="sofa"
                price="84"
                slug="abubakar"
                url="http://res.cloudinary.com/abubakarraza64/image/upload/v1661023069/bnxtflegzh0i8yam2dmd.jpg"
              />
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              {' '}
              <Card
                title="hello this is abuakar"
                name="sofa"
                price="84"
                slug="demo"
                url="http://res.cloudinary.com/abubakarraza64/image/upload/v1661023069/bnxtflegzh0i8yam2dmd.jpg"
              />
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
