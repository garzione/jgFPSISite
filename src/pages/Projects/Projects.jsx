import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Projects = ({ data, tech, setTech }) => {
  const divSty = {
    paddingTop: "10px",
    paddingBottom: "10px",
    marginBottom: "10px",
    marginLeft: "25%",
    marginTop: "10%",
    width: "50%",
    alignItems: "center",
    borderRadius: "20px",
    borderStyle: "solid",
    borderWidth: "thick",
  };

  useEffect(() => {
    if (tech === null) {
      setTech(data[0].t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ height: "85vh", width: "60%", overflow: "scroll" }}>
      {data &&
        data.map((val, i) => {
          return (
            <div style={divSty} key={val.n}>
              {val.f && (
                <img
                  src={require(`../../gifs/${val.f}.png`)}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = require(`../../gifs/${val.f}.gif`))
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = require(`../../gifs/${val.f}.png`))
                  }
                  height="200px"
                  alt="etym"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "75%",
                    cursor: "pointer",
                  }}
                />
              )}

              <h1
                onClick={() => setTech(data[i].t)}
                style={{ maxWidth: "100%", cursor: "pointer" }}
              >
                {" "}
                {val.n}{" "}
              </h1>
              <div>
                <a
                  href={val.g}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: "10px" }}
                    size="2x"
                    icon={faSquareGithub}
                  />
                </a>
                {val.s && (
                  <a
                    href={val.s}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <FontAwesomeIcon size="2x" icon={faRocket} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Projects;
