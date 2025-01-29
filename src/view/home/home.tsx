import Chat from "../../components/chat/chat";
import Footer from "../../components/home/footer";
import Header from "../../components/home/header";
import Section from "../../components/home/section";
import SectionUno from "../../components/home/sectionUno";

function Home() {
  return (
    <div>
      <Header />
      <Section/>
      <SectionUno/>
      <Footer />
      <Chat/>
    </div>
  );
}

export default Home;
