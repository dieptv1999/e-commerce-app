import FooterComponent from "./common/FooterComponent";
import Navbar from "./common/Navbar";

export default function Layout({children}) {
  return (
    <div id="scrollbar">
      <Navbar/>
      <div className="flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <div className="footer">
          <FooterComponent />
        </div>
      </div>
    </div>
  )
}
