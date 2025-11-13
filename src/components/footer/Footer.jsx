import React, { useEffect, useRef } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const needsRedrawRef = useRef(false);
  const hexagonsRef = useRef([]); // ✅ Use useRef to persist hexagons

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const canvas = canvasElement.getContext("2d");
    let [canvW, canvH] = [window.innerWidth, window.innerHeight];
    let size = 20;
    let xinc = size * Math.sin(Math.PI / 3) * 2;
    let yinc = size * 1.5;

    const setCanvasSize = () => {
      canvW = window.innerWidth;
      canvH = 525;
      canvasElement.width = canvW;
      canvasElement.height = canvH;
      createHexGrid();
    };

    const createHexGrid = () => {
      const hexagons = [];
      for (let y = 0; y < canvH / yinc; y++) {
        for (let x = y % 2 === 0 ? 0 : xinc / 2; x < canvW; x += xinc) {
          hexagons.push({
            x,
            y: y * yinc,
            hoverState: 0,
            opacity: 0.5,
            lineWidth: 3.5,
          });
        }
      }
      hexagonsRef.current = hexagons; // ✅ Store in ref
      needsRedrawRef.current = true;
    };

    const drawHexagon = (x, y, hoverState, opacity, lineWidth) => {
      canvas.beginPath();
      for (let side = 0; side > -7; side--) {
        let x2 = x + size * Math.sin((side * 2 * Math.PI) / 6);
        let y2 = y + size * Math.cos((side * 2 * Math.PI) / 6);
        canvas.lineTo(x2, y2);
      }
      canvas.fillStyle = hoverState === 1 ? "rgba(24,24,24,0.8)" : "#181818";
      canvas.fill();
      canvas.globalAlpha = opacity;
      canvas.strokeStyle =
        hoverState === 2
          ? "#FFD53F"
          : hoverState === 1
          ? "rgba(244,215,116,1)"
          : "#555";
      canvas.lineWidth = lineWidth;
      canvas.stroke();
      canvas.globalAlpha = 1;
    };

    const redraw = () => {
      if (!needsRedrawRef.current) return;
      canvas.clearRect(0, 0, canvW, canvH);
      hexagonsRef.current.forEach(({ x, y, hoverState, opacity, lineWidth }) =>
        drawHexagon(x, y, hoverState, opacity, lineWidth)
      );
      needsRedrawRef.current = false;
    };

    let lastMouseMove = 0;
    const handleMouseMove = (event) => {
      const now = performance.now();
      if (now - lastMouseMove < 50) return;
      lastMouseMove = now;

      const mouseX = event.clientX;
      const mouseY = event.clientY;
      hexagonsRef.current.forEach((hex) => {
        let distance = Math.sqrt((mouseX - hex.x) ** 2 + (mouseY - hex.y) ** 2);
        let newHoverState =
          distance < size * 1.5 ? 2 : distance < size * 6 ? 1 : 0;
        if (hex.hoverState !== newHoverState) {
          hex.hoverState = newHoverState;
          needsRedrawRef.current = true;
        }
      });
    };

    const animate = () => {
      redraw();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", setCanvasSize);
    canvasElement.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    setCanvasSize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", setCanvasSize);
      canvasElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer className="position-relative footer_banner overflow-hidden mt-3">
      <canvas ref={canvasRef} className="client_banner_hex" />
      <div className="container-fluid footercontainer">
        <div className="row align-items-center">
          <div className="col-lg-4 col-4">
            <img
              src={require("../../images/logos/bnblogo.png")}
              className="img-fluid footlogo"
              alt=""
            />
            <div className="social-links">
              <button
                className=""
                onClick={() =>
                  window.open("https://www.facebook.com/brandandbeeyond/")
                }
              >
                <i className="fab fa-facebook-f"></i>
              </button>
              <button
                className=""
                onClick={() =>
                  window.open("https://www.instagram.com/brandandbeeyond/")
                }
              >
                <i className="fab fa-instagram"></i>
              </button>
              <button
                className=""
                onClick={() =>
                  window.open("https://in.linkedin.com/company/brandandbeeyond")
                }
              >
                <i className="fab fa-linkedin-in"></i>
              </button>
              <button
                className=""
                onClick={() => window.open("https://wa.me/+917030060904")}
              >
                <i className="fab fa-whatsapp"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-3 d-flex justify-content-center flex-column">
            <h3 className="footer_head">Contact us :</h3>
            <ul className="footer_contacts mt-2 ps-0">
              <li className="nav-item text-white numbers py-2">
                +91 70300 07581
              </li>
              <li className="nav-item text-white numbers py-2">
                +91 70300 60904
              </li>
            </ul>
            <h3 className="footer_head">Office Address :</h3>
            <div className="address mt-3">
              <p>
                Office No 12 ,Second Floor, Business Bay, Shree Matoshree Nagar,
                Mumbai Naka, Nashik 422002.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-4 d-flex justify-content-center">
            <ul className="footer_contacts mt-2 ps-0">
              <li className="nav-item text-white numbers py-2">
                <Link className="nav-link" to={"/"}>
                  HOME
                </Link>
              </li>
              <li className="nav-item text-white numbers py-2">
                <Link className="nav-link" to={"/about"}>
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item text-white numbers py-2">
                <Link className="nav-link" to={"/services"}>
                  SERVICES
                </Link>
              </li>
              <li className="nav-item text-white numbers py-2">
                <Link className="nav-link" to={"/portfolio"}>
                  PORTFOLIO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
