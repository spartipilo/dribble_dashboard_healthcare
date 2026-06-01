import Spacing from "./Spacing";

function CardDepartments(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 20,
        borderRadius: 25,
        border: "1px solid #e8e8e8",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: '2rem', fontWeight: "100" }}>{props.title}</p>
        <div
          style={{
            border: "1px solid #e8e8e8",
            padding: 15,
            display: "flex",
            borderRadius: 10,
            color: "#a8a8a8",
          }}
        >
          <span className="material-symbols-outlined">error</span>
        </div>
      </div>
      <Spacing height={50} />
      <div>
        <span style={{ fontSize: '3rem' }}>{props.number}</span>
      </div>
      <Spacing height={30} />
    </div>
  );
}

export default CardDepartments;
