import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SVGChart.css";
import {
  faScrewdriverWrench,
  faSignature,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

const SVGchart = ({ dims }) => {
  const [cubes, setCubes] = useState(null);
  const [center, setCenter] = useState(null);
  const svgz = [faScrewdriverWrench, faSignature, faPhone];
  const rout = ["projects", "writing", "contact"];

  useEffect(() => {
    const center = (dims.width * 0.75) / 2;
    setCenter(center);
    const dis = 150;
    let out = [];

    const dynamicCubeStyle = (i, r) => {
      let pos = 0;
      if (i === 1) {
        pos = center;
      } else if (i > 1) {
        pos = center + dis;
      } else {
        pos = center - dis;
      }

      return {
        x: pos,
        y: r + Math.floor(Math.random() * 100 + 25),
        r: r,
      };
    };
    [0, 1, 2].forEach((i) => {
      out.push(dynamicCubeStyle(i, 60));
    });
    setCubes(out);
  }, [dims.width]);

  const svgStyle = {
    height: "300px",
    width: "100%",
  };

  const st2 = {
    color: "#C0C0C0",
    width: "10px",
    height: "10px",
    borderRadius: "100%",
  };

  return (
    <>
      <head>
        <script
          src="https://kit.fontawesome.com/1569d8a45a.js"
          crossOrigin="anonymous"
        >
          {" "}
        </script>
      </head>
      <svg style={svgStyle}>
        {cubes &&
          cubes.map((_, i) => {
            const circ = (
              <>
                {i < 2 && (
                  <line
                    x1={cubes[i].x + 10}
                    y1={cubes[i].y + 70}
                    key={i}
                    x2={cubes[i + 1].x - 10}
                    y2={cubes[i + 1].y + 70}
                    stroke="black"
                    strokeWidth="2%"
                  ></line>
                )}
                {center && (
                  <Link to={`/${rout[i]}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      className="icon"
                      height={cubes[i].r * 2}
                      x={cubes[i].x - center}
                      y={cubes[i].y - 25}
                    >
                      <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                    </svg>

                    <FontAwesomeIcon
                      height="50px"
                      x={cubes[i].x - center}
                      y={cubes[i].y - 25}
                      style={st2}
                      key={i}
                      icon={svgz[i]}
                      title={rout[i]}
                    />
                  </Link>
                )}
              </>
            );

            return circ;
          })}
      </svg>
    </>
  );
};

export default SVGchart;
