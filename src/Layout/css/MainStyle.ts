import { device } from "../../Library/deviceSizes";
import styled from "styled-components";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  gap: 1;

  header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    letter-spacing: 20px;
    color: #2c2926;
    font-family: "Krona One", sans-serif;

    @media ${device.desktop} {
      font-size: 50px;

      i {
        img {
          width: 65px;
        }
      }
    }

    @media ${device.tablet} {
      font-size: 15px;
      padding-top: 10px;

      i {
        img {
          width: 35px;
        }
      }
    }

    @media ${device.mobile} {
      font-size: 15px;
      padding-top: 15px;
      letter-spacing: 10px;

      i {
        img {
          width: 10px;
        }
      }
    }
  }

  main {
    //pictures
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 20px;

    div {
      background-color: pink;
      width: 70%;
      height: 300px;

      @media ${device.tablet} {
        width: 100%;
      }
    }

    aside {
      //gituhub
      display: flex;
      flex-direction: column;
      width: 30%;

      span {
        background-color: blue;
        height: 50%;
      }
    }

    article {
      //soundcloud
      
      width: 25%;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        border-radius: 100%;
        width: 50%;
        height: 50%;
      }
    }

    section {
      //linkedin
      width: 75%;
      display: flex;
      justify-content: space-around;
      margin-top: 25px;
      nav {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        border-radius: 50px;
        background-color: #DFEBF2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35%;
        img {
          width: 50%;
          height: 50%;
        }
      }
      form {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        border-radius: 50px;
        background-color: #F27141;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35%;
        img {
          
          width: 50%;
          height: 50%;
        }
      }
    }
  }

  @media ${device.tablet} {
    width: 100%;

    main {
      //pictures
      div {
        width: 100%;
        height: 230px;
      }

      //gituhub
      aside {
        width: 40%;
        height: 250px;
        order: 3;
      }

      //soundcloud
      article {
        width: 60%;
        height: 250px;
        order: 2;
        img{
          box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
          border-radius: 100%;
        }
      }

      //linkedin
      section {
        width: 100%;
        height: 250px;
        order: 4;

        nav{
          width: 45%;
          height: 75%;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
        }

        form{
          width: 45%;
          height: 75%;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
        }
      }
    }
  }

  @media ${device.mobile} {
    width: 100%;

    main {
      //pictures
      div {
        width: 100%;
        height: 200px;
      }

      //gituhub
      aside {
        width: 40%;
        order: 3;
      }

      //soundcloud
      article {
        width: 60%;  
        order: 2;
      }

      //linkedin
      section {
        width: 100%;
        order: 4;

        nav{
          width: 40%;
          height: 75%;
        }

        form{
          width: 40%;
          height: 75%;  
      }
    }
    }
  }
`;
