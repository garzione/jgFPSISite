import { Link } from "react-router-dom";

const TitleDesc = () => {
  const divSty = {
    alignContent: "center",
    fontFamily: "Anonymous Pro",
  };

  return (
    <div style={divSty}>
      <h1 style={{ fontSize: "50px" }}>
        {" "}
        <span style={{ textDecoration: "line-through", color: "#A9A9A9" }}>
          <b>Justin Garzione </b>{" "}
        </span>
      </h1>
      <h2 style={{ fontSize: "35px" }}>
        <b>
          {" "}
          {"Hi, I'm "}
          <span style={{ textDecoration: "line-through", color: "#A9A9A9" }}>
            Justin.
          </span>
          <span style={{ fontSize: "50px", color: "  #1ae96c  " }}>
            {" "}
            <b> 0x83E...B40d3 </b>
          </span>
          <br /> I'm a Software Engineer. <br />
          Check out
        </b>

        <i>
          {" "}
          <Link to="./likes" style={{ color: " #1ae96c " }}>
            <b> some things that I like. </b>{" "}
          </Link>
        </i>
      </h2>
    </div>
  );
};

export default TitleDesc;
