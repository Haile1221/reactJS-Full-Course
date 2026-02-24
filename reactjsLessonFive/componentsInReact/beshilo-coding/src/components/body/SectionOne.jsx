
import "./SectionOne.css"
function SectionOne() {
  return (
    <main className="body">
      <section className="hero">
        <h1>Learn Coding the Smart Way</h1>
        <p>
          Welcome to Beshilo Coding Academy — 
          where beginners become professional developers.
          Start your journey with HTML, CSS, JavaScript, and React.
        </p>
        <button className="cta-btn">Start Learning</button>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Beginner Friendly</h3>
          <p>Step-by-step lessons designed for absolute beginners.</p>
        </div>

        <div className="feature-card">
          <h3>Real Projects</h3>
          <p>Build real-world applications while learning.</p>
        </div>

        <div className="feature-card">
          <h3>Career Focused</h3>
          <p>Gain skills that prepare you for tech jobs.</p>
        </div>
      </section>
    </main>
  );
}

export default SectionOne;