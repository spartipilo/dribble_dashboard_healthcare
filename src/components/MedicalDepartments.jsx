function MedicalDepartments() {
  return (
    <section
      id="section_medical_departments"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <p style={{ fontSize: "2rem" }}>Medical Departments</p>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "100",
            color: "#808080",
            paddingTop: 10,
          }}
        >
          Manage departments and doctor assignments
        </p>
      </div>
      <div style={{ display: "flex", gap: 15 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 15,
            borderRadius: 50,
            backgroundColor: "#0067ff",
            color: "white",
            gap: 10,
            fontWeight: "100",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          <span className="material-symbols-outlined">add</span>
          Add New Departments
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 15,
            borderRadius: 50,
            backgroundColor: "white",
            gap: 10,
            fontWeight: "100",
            fontSize: "1.2rem",
            border: "2px solid #e8e8e8",
            cursor: "pointer",
          }}
        >
          <span className="material-symbols-outlined">instant_mix</span>
          Filter
        </div>
      </div>
    </section>
  );
}

export default MedicalDepartments;
