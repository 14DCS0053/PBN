import ActivitySection from "./Components/Sections/Activity";
import TableSection from "./Components/Sections/Table";
import BannerSection from "./Components/Sections/Banner";
import "./index.css"; // global css
export default function App() {
  return (
    <div className="App">
      <BannerSection/>
      <ActivitySection />
      <TableSection/>
    </div>
  );
}
