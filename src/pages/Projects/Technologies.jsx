const Technologies = ({ tech }) => {
  return (
    <div style={{ height: "85vh", width: "25%" }}>
      <h1> Technologies </h1>
      {tech &&
        tech.map((el, i) => {
          return <h2 key={i}> {el} </h2>;
        })}
    </div>
  );
};

export default Technologies;
