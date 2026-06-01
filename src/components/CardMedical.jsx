import Spacing from "./Spacing";

function CardMedical(props) {
  return (
    <div style={{ padding: 20, backgroundColor: "white", borderRadius: 25 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid #e8e8e8",
          paddingBottom: 20,
        }}
      >
        <div>
          <p style={{ fontSize: '1.5rem' }}>{props.title}</p>
          <p style={{ color: "#a8a8a8", fontWeight: "100", paddingTop: 10 }}>
            {props.subtitle}
          </p>
        </div>
        <a
          style={{
            textDecoration: "none",
            color: "#0068ff",
            fontSize: '1rem',
            fontWeight: 100,
          }}
          href="#"
        >
          View All
        </a>
      </div>
      <Spacing height={20} />
      {props.members.map((el, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <img style={{ height: 50, borderRadius: "50%" }} src={el.avatar} />
            <div>
              <p style={{ marginBottom: 5 }}>{el.name_medical}</p>
              <p style={{ color: "#a8a8a8", fontWeight: 100 }}>
                {el.number_medical}
              </p>
            </div>
          </div>
          <div>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardMedical;
