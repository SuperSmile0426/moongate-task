import React from "react";

function Landing(props) {
  return (
    <div className="flex flex-col">
      <div className="bg-blue-500">
        <div>
          <div id="logo">My Logo</div>

          <button onclick="onMenuClick()">
            <i className="material-icons">menu</i>
          </button>
        </div>
      </div>

      <div className="flex flex-col mobile:flex-row">
        <nav id="nav" className="bg-yellow-500 w-full mobile:w-96">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className="bg-green-500 w-full">
          <section id="home">
            <h1>Home</h1>
            <button>Learn More</button>
          </section>

          <section>
            <div id="why">
              <h2>Why</h2>
              <div>
                <img src="https://picsum.photos/1500" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sed fermentum quam, ut efficitur nisl.
              </p>
            </div>
            <div id="what">
              <h2>What</h2>
              <div>
                <img src="https://picsum.photos/1000" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sed fermentum quam, ut efficitur nisl.
              </p>
            </div>
            <div id="how">
              <h2>How</h2>
              <div>
                <img src="https://picsum.photos/1800" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sed fermentum quam, ut efficitur nisl.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-red-500">
        <div>
          <nav>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </nav>
          <div>&copy; 2023 My Company</div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
