import "./hero.css";
import HeroImg from "../../images/hero.svg";

const Hero = () => {
  return (
    <section class="section-hero">
      <div className="hero container">
        <div class="hero-text-box">
          <h1 class="heading-primary">Learn to code with a new digital life</h1>
          <p class="hero-description">
            Start your new work with our weekly remote tech programs in
            full-stack developer and build web and mobile apps powered by
            Javascript.
          </p>
          <a href="#" class="btn">
            Learn More
          </a>
        </div>

        <div class="hero-image-box">
          <img className="hero-img" src={HeroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
