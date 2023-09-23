import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import classes from "./page.module.scss";
import Collage from "@/components/Collage";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Carousel />
      <div className={classes.page_content}>
        <div className={classes.purple_rectangle}>
          <h1>Lorem</h1>
          <p>subtitle</p>
        </div>
        <Collage />
      </div>
      <div className={classes.page_content_2}>
        <div className={classes.second_part}>
          <h2>Lorem ipsum </h2>
          <img src="images/system.png" alt="" />
          <div className={classes.second_content}>
            <h2>Lorem ipsum </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className={classes.getIn}>
              <p>Lorem ipsum</p>
              <img src="images/arrow.png" alt="" />
            </div>
          </div>
        </div>
        <div className={classes.purple_rectangle_2}></div>
      </div>
      <Logo />
      <Footer />
    </main>
  );
}
