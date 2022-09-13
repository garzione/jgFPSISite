import TitleDesc from "../../components/Home/TitleDesc";
import SVGchart from "../../components/Home/SVGchart";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { ReactComponent as Question } from "../../components/svgs/question.svg";
import HttpFpsi from "../../components/Home/HttpFpsi";
import "./Home.module.css";

const Home = () => {
  const [screenDims, setScreenDims] = useState(null);
  const [dialog, setDialog] = useState(false);

  window.onresize = function () {
    setScreenDims({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    setScreenDims({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const divSt = {
    margin: "auto",
    width: "50%",
    textAlign: "center",
  };

  const divSvg = {
    margin: "auto",
    width: "75%",
    textAlign: "center",
    marginTop: "12vh",
  };

  const qs = {
    height: "20px",
    width: "50px",
    marginTop: "10px",
    marginLeft: "10px",
    color: "black",
  };

  const bx = {
    height: "180px",
    width: "200px",
    backgroundColor: "black",
    marginLeft: "30px",
    marginTop: "10px",
    zIndex: "10000000000",
  };

  const allElements = (
    <div style={{ width: "100vw" }}>
      <div style={{ float: "left", cursor: "help" }}>
        <Question
          style={qs}
          onMouseEnter={() => setDialog(true)}
          onMouseLeave={() => setDialog(false)}
        />

        {dialog && (
          <div style={bx}>
            <p
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "Anonymous Pro",
              }}
            >
              This site is available in both web2 and web3 renditions. By
              clicking the Http radio button, you'll move to that version of the
              site.
            </p>
          </div>
        )}
      </div>

      <div style={{ float: "right" }}>
        <HttpFpsi />
      </div>
      <div>
        <header style={divSt}>
          <TitleDesc />
        </header>
        <div style={divSvg}>
          <SVGchart dims={screenDims} />
        </div>

        <Footer />
      </div>
    </div>
  );

  return <> {screenDims ? allElements : <></>} </>;
};

export default Home;
