function Navbar() {
  return (
    <div>
      <div
          className="menu_burger"
          style={{
            fontSize: "2rem",
            cursor: "pointer",
            display: "none",
            backgroundColor:"white",
            width:"min-content",
            padding:"20px",
            borderRadius:"50%"
          }}
        >
          <span class="material-symbols-outlined">menu</span>
        </div>
    
    <header
      style={{
        borderRadius: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <nav
      className="nav_container"
        style={{
          display: "flex",
          gap: 80,
          backgroundColor: "white",
          padding: "15px 30px",
          borderRadius: 50,
        }}
      >
        
        <div style={{ fontSize: "2rem", alignContent: "center" }}>Wellora</div>
        <div className="menu_nav" style={{ display: "flex", gap: 40 }}>
          <div style={{ alignContent: "center" }}>Dashboard</div>
          <div style={{ alignContent: "center" }}>Schedules</div>
          <div style={{ alignContent: "center" }}>Patients</div>
          <div style={{ alignContent: "center" }}>Doctors</div>
          <div
            style={{
              alignContent: "center",
              backgroundColor: "#0268fe",
              borderRadius: 50,
              color: "white",
              padding: 15,
            }}
          >
            Departments
          </div>
          <div style={{ alignContent: "center" }}>Employees</div>
        </div>
      </nav>
      <nav style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <div
          style={{
            padding: 15,
            width: "fit-content",
            backgroundColor: "white",
            alignItems: "center",
            display: "flex",
            borderRadius: "50%",
            border: "2px solid #e8e8e8",
          }}
        >
          <span
            style={{ fontSize: "2rem" }}
            className="material-symbols-outlined"
          >
            search
          </span>
        </div>
        <div
          style={{
            padding: 15,
            width: "fit-content",
            backgroundColor: "white",
            alignItems: "center",
            display: "flex",
            borderRadius: "50%",
            border: "2px solid #e8e8e8",
          }}
        >
          <span
            style={{ fontSize: "2rem", fontWeight: "normal" }}
            className="material-symbols-outlined"
          >
            settings
          </span>
        </div>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            padding: 10,
            borderRadius: 50,
            gap: 20,
          }}
        >
          <img
            style={{ height: "50px", borderRadius: "50%" }}
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          />
          <div>
            <p style={{ fontSize: "1.3rem" }}>Masud A.</p>
            <p style={{ fontSize: "1rem", color: "gray" }}>
              masud.holt@example.com
            </p>
          </div>
          <span
            style={{ fontSize: "1.5rem" }}
            className="material-symbols-outlined"
          >
            keyboard_arrow_down
          </span>
        </div>
      </nav>
    </header>
    </div>
  );
}

export default Navbar;
