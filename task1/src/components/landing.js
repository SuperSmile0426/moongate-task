import { Icon } from "@iconify/react";
import React, { useState } from "react";
import {
  AiOutlineQuestionCircle,
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";
import { MdMenu, MdHome } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function Landing(props) {
  const [isOpen, setIsOpen] = useState(false);
  const onMenuClick = () => {
    if (isOpen) {
      document.getElementById("nav").classList.remove("hidden");
    } else document.getElementById("nav").classList.add("hidden");
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col">
      <div className="bg-blue-500">
        <div class="flex justify-between items-center">
          <div id="logo" class="text-lg font-bold">
            My Logo
          </div>

          <button
            onClick={onMenuClick}
            class="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            <MdMenu className="w-8 h-auto" />
          </button>
        </div>
      </div>

      <div className="flex flex-col mobile:flex-row">
        <nav id="nav" className="bg-yellow-500 w-full mobile:w-96">
          <a
            href="#"
            class="flex items-center justify-center text-black bg-yellow-500 hover:bg-blue-500 transition-colors duration-300 h-10"
          >
            <AiOutlineHome className="mr-2" />
            Home
          </a>
          <a
            href="#"
            class="flex items-center justify-center text-black bg-yellow-500 hover:bg-blue-500 transition-colors duration-300 h-10"
          >
            <AiOutlineQuestionCircle className="mr-2" />
            About
          </a>
          <a
            href="#"
            class="flex items-center justify-center text-black bg-yellow-500 hover:bg-blue-500 transition-colors duration-300 h-10"
          >
            <AiOutlineMail className="mr-2" />
            Contact
          </a>
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
            <button
              onclick="onMenuClick()"
              class="bg-purple-700 m-4 text-white py-2 px-2 rounded hover:bg-slate-600 focus:outline-none focus:shadow-outline"
            >
              <FaFacebookF className="w-8 h-auto" />
            </button>
            <button
              onclick="onMenuClick()"
              class="bg-purple-700 m-4 text-white py-2 px-2 rounded hover:bg-slate-600 focus:outline-none focus:shadow-outline"
            >
              <FaTwitter className="w-8 h-auto" />
            </button>
            <button
              onclick="onMenuClick()"
              class="bg-purple-700 m-4 text-white py-2 px-2 rounded hover:bg-slate-600 focus:outline-none focus:shadow-outline"
            >
              <FaInstagram className="w-8 h-auto" />
            </button>
          </nav>
          <div>&copy; 2023 My Company</div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
