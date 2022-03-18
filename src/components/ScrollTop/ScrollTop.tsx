import { useState } from "react";
import { Link } from "react-router-dom";

// import { FaChevronUp } from "react-icons/fa";
function ScrollTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <div className="scrolltop" style={{background:'red'}}>
      <Link to="#" className={`${visible ? "scroll-block" : "scroll-none"}`}>
        {/* <FaChevronUp /> */}
        <i className="bx bx-chevron-up"></i>
      </Link>
    </div>
  );
}

export default ScrollTop;



// .scrolltop {
//     z-index: 10;
//     position: fixed;
//     bottom: 40px;
//     right: 40px;
//     .scroll-none {
//       opacity: 0;
//       visibility: hidden;
//     }
//     a {
//       background-color: var(--ocean-blue);
//       padding: 1rem;
//       border-radius: 100%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       transition: 0.4s ease-in-out;
//       z-index: 1;
//       svg {
//         color: white;
//         font-size: 1.3rem;
//       }
//     }
//   }