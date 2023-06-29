import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const Contact = () => {
  return (
    <Container>
      <div className="img">
        <img
          src="https://i.ndtvimg.com/i/2015-03/zayn-malik_640x480_41427346870.jpg"
          alt="pic"
        />
      </div>
      <div className="email">
        <h2>testing4pc@gmail.com</h2>
      </div>
      <div className="social-media">
        <div className="instagram handle">
          <a target="_blank" href="https://www.instagram.com/realdonaldtrump/">
            Instagram
          </a>
          <InstagramIcon />
        </div>
        <div className="linkedin handle">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/tata-consultancy-services/"
          >
            LinkedIn
          </a>
          <LinkedInIcon />
        </div>
        <div className="Twitter handle">
          <a target="_blank" href="https://twitter.com/elonmusk">
            Twitter
          </a>
          <TwitterIcon />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #b5b3b3;
    margin: 10px 0;
  }

  .email {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .social-media {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 0;
    font-size: 22px;

    .handle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;

      a {
        text-decoration: none;
        color: black;
        margin: 0 3px;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 500px) {
      flex-direction: column;
      font-size: 17px;

      .handle {
        width: 100%;
        justify-content: space-evenly;
      }
    }
  }
`;

export default Contact;
