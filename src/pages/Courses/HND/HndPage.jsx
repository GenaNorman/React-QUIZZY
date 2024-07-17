import SideBar from "../../../components/layouts/SideBar";
import HndSpecialties from "../../../components/Exams/HND/HndSpeciallties";
import TopNav from "../../../components/layouts/TopNav";
// import Filepicker from "../../../components/Exams/HND/Filepicker";

function courses() {
  return (
    <div className="courses">
      <SideBar />
      <div className="courses__block">
        <TopNav />
        <HndSpecialties />
        {/* <Filepicker /> */}
      </div>
    </div>
  );
}

export default courses;
