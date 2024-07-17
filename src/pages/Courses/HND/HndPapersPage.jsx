import SideBar from "../../../components/layouts/SideBar";
import TopNav from "../../../components/layouts/TopNav";
import Papers from "../../../components/Exams/HND/Papers";

function courses() {
  return (
    <div className="courses">
      <SideBar />
      <div className="courses__block">
        <TopNav />
        <Papers />
      </div>
    </div>
  );
}

export default courses;
