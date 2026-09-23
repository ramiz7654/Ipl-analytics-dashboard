function AboutPage() {
  return (
    <div className="app">
      <main className="dashboard">
        <section className="about-section" id="about">
          <div className="about-content">
            <span className="section-label">ABOUT THE PROJECT</span>

            <h2>IPL Analytics</h2>

            <p>
              IPL Analytics is an interactive web dashboard that helps
              users explore IPL statistics across different seasons.
              It provides batting, bowling, team and player insights
              through interactive records and charts.
            </p>

            <p>
              The dashboard provides useful IPL records such as top run
              scorers, leading wicket takers, highest scores, sixes, fours,
              Player of the Match performances and team statistics.
              Interactive charts are also used to present statistical
              insights in a simple and visual way.
            </p>

            <div className="about-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>Recharts</span>
              <span>IPL Dataset</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;