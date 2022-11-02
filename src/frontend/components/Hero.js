import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Images = [
  {
    img: "https://images.theindia.co.in/place/banner_sidi-saiyyad-jali_902.JPG",
    desc: "Sidi Saiyad ni Jali",
    artist: "StannArt",
  },
  {
    img: "https://imgs.search.brave.com/5SlFmqcHgVy1Cu-10VLbQSNmhYlJLOJzb69c9BvXPPM/rs:fit:631:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/aG1abllubFc1SGpI/My1XWjJSbmVRSGFG/ayZwaWQ9QXBp",
    desc: "Statue Of Unity",
    artist: "StannArt",
  },
  {
    img: "https://www.holidify.com/images/cmsuploads/compressed/Sun_Temple,_Modhera_-_Sabha_Mandap_01_20180804140521.jpg",
    desc: "Modhera Surya Mandir",
    artist: "StannArt",
  },
  {
    img: "https://imgs.search.brave.com/pdNI9s4C9mdTBxuw5soMMqsyrzeThuzw3LTvCVyJd1U/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/aFR4VFFzRVlKZmFF/Rnc2ZjlEYmJ3SGFF/SyZwaWQ9QXBp",
    desc: "AksharDham",
    artist: "StannArt",
  },
];

const Hero = () => {
  const [main, setMain] = useState(Images[0]);
  // console.log(main);

  return (
    <HeroContainer>
      <div className="container">
        <div className="wrapper">
          <div className="text-container">
            <h1 className="white">
              Discover, Collect, and sell extraordinary NFT's
            </h1>
            <h3 className="blue">
              NFT Marketplace for Gujarat's cultural{" "}
              <span className="white">Artifacts</span> and{" "}
              <span className="white">Heritage</span>
            </h3>
            <div className="btn-container">
              <Link to="/collections">
                <button className="btn-blue btn">Explore</button>
              </Link>
              <Link to="/create">
                <button className="btn-grey btn">Create</button>
              </Link>
            </div>
          </div>
          <div className="card-container">
            <div className="image-container">
              <div className="image">
                <img src={`${main.img}`} alt="" />
              </div>
              <div className="artist-container">
                <img
                  src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                  alt=""
                />
                <div className="artict-desc">
                  <h2 className="white marg">{main.desc}</h2>
                  <h4 className="blue marg">StannArt</h4>
                </div>
              </div>
            </div>
            <div className="gallery">
              {Images.map((image, index) => {
                return (
                  <img
                    onClick={() => {
                      console.log(main);
                      setMain(image);
                    }}
                    className={`icon ${
                      image.img === main.img ? "active" : null
                    }`}
                    src={image.img}
                    key={index}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  position: relative;

  .container {
    height: 90.5vh;
  }

  .container::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: url("https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=800"); */
    /* background: url({Images[0].img}); */
    background: url(${Images[0].img});
    opacity: 70%;
    background-position: center;
    background-size: cover;
    filter: blur(3px);
  }

  .container {
    display: flex;
    align-items: center;
  }

  .wrapper {
    /* border: 2px solid black; */
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 120px;
  }

  .text-container {
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    text-align: center;
  }

  .text-container h1 {
    font-size: 2.5rem;
  }

  .text-container h3 {
    font-size: 1.2rem;
  }

  .btn-container {
    display: flex;
    gap: 1rem;
  }

  .card-container {
    width: 500px;
    height: 534px;
    border-radius: 10px;
    overflow: hidden;
    /* border: 2px solid black; */
    display: grid;
    grid-template-rows: 4fr 1fr;
    row-gap: 10px;
  }

  .image {
    height: 80%;
  }

  .image img {
    width: 100%;
    height: 333px;
    object-fit: cover;
  }

  .artist-container {
    margin-top: -2.4px;
    background-color: #303238;
    height: 20%;
    padding-left: 20px;
    display: flex;
    align-items: center;
    gap: 0 10px;
  }

  .artist-desc h2{
    color: white;
  }

  .artist-container img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .gallery {
    height: 20%;
    display: flex;
    justify-content: space-between;
  }

  .icon {
    width: 110px;
    height: 80px;
    border-radius: 10px;
    cursor: pointer;
  }
  .active {
    border: 4px solid #737df9;
  }

  .white {
    color: white;
  }

  .marg{
    margin: 0;
    text-align: left;
  }
  .grey {
    color: #8a939b;
  }
  .blue {
    color: #61a4fa;
  }
  .btn {
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  .btn-blue {
    background-color: #2181e2;
  }
  .btn-grey {
    background-color: #363941;
  }
`;

export default Hero;
