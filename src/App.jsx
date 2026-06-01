import CardDepartments from "./components/CardDepartments";
import CardMedical from "./components/CardMedical";
import MedicalDepartments from "./components/MedicalDepartments";
import Navbar from "./components/Navbar";
import Spacing from "./components/Spacing";
import med_dep from "./json/medical_departments.json";
import medical from "./json/medical.json";

function App() {
  return (
    <>
      <Navbar />
      <Spacing height={30} />
      <MedicalDepartments />
      <Spacing height={30} />
      <section
      id="section_card_departments"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 25,
        }}
      >
        {med_dep.map((el, index) => (
          <CardDepartments key={index} title={el.title} number={el.number} />
        ))}
      </section>
      <Spacing height={30} />
      <section
      id="section_card_medical"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 20,
        }}
      >
        {medical.map((el, index) => (
          <CardMedical
            key={index}
            title={el.title}
            subtitle={el.subtitle}
            members={el.lab}
          />
        ))}
      </section>
    </>
  );
}

export default App;
