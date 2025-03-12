import React, { useEffect, useRef } from "react";
import "./footer.css";

const Footer = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const needsRedrawRef = useRef(false);
  let hexagons = [];

  useEffect(() => {
    const canvasElement = canvasRef.current;
    const canvas = canvasElement.getContext("2d");
    let [canvW, canvH] = [window.innerWidth, window.innerHeight];
    let size = 20;
    let xinc = size * Math.sin(Math.PI / 3) * 2;
    let yinc = size * 1.5;

    // Function to set canvas dimensions
    const setCanvasSize = () => {
      canvW = window.innerWidth;
      canvH = 525; // Fixed height
      canvasElement.width = canvW;
      canvasElement.height = canvH;
      createHexGrid();
    };

    // Function to create the hexagonal grid
    const createHexGrid = () => {
      hexagons = [];
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
      needsRedrawRef.current = true;
    };

    // Function to draw a hexagon
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

    // Redraw the hexagons
    const redraw = () => {
      if (!needsRedrawRef.current) return;
      canvas.clearRect(0, 0, canvW, canvH);
      hexagons.forEach(({ x, y, hoverState, opacity, lineWidth }) =>
        drawHexagon(x, y, hoverState, opacity, lineWidth)
      );
      needsRedrawRef.current = false;
    };

    // Optimize mouse move event
    let lastMouseMove = 0;
    const handleMouseMove = (event) => {
      const now = performance.now();
      if (now - lastMouseMove < 50) return; // Limit updates to every 50ms
      lastMouseMove = now;

      let mouseX = event.clientX,
        mouseY = event.clientY;
      hexagons.forEach((hex) => {
        let distance = Math.sqrt((mouseX - hex.x) ** 2 + (mouseY - hex.y) ** 2);
        let newHoverState =
          distance < size * 1.5 ? 2 : distance < size * 6 ? 1 : 0;
        if (hex.hoverState !== newHoverState) {
          hex.hoverState = newHoverState;
          needsRedrawRef.current = true;
        }
      });
    };

    // Animation loop (optimized)
    const animate = () => {
      redraw();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Resize event
    window.addEventListener("resize", setCanvasSize);
    canvasElement.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    setCanvasSize();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", setCanvasSize);
      canvasElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer className="position-relative footer_banner mt-3 overflow-x-hidden">
      <canvas ref={canvasRef} className="client_banner_hex" style={{pointerEvents:'none'}} />
      <div className="container-fluid footercontainer">
        <div className="row align-items-center">
          <div className="col-lg-4 col-4">
            <img
              src={require("../../images/logos/bnblogo.png")}
              className="img-fluid footlogo"
           
              alt=""
            />
          </div>
          <div className="col-lg-4 col-4 d-flex justify-content-center flex-column">
            <h3 className="footer_head">Contact us :</h3>
            <ul className="footer_contacts mt-2 ps-0">
              <li className="nav-item text-white numbers py-2">
                +91 45674844158
              </li>
              <li className="nav-item text-white numbers py-2">
                +91 45674844158
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
                 HOME
              </li>
              <li className="nav-item text-white numbers py-2">
              ABOUT US
              </li>
              <li className="nav-item text-white numbers py-2">
              SERVICES
              </li>
              <li className="nav-item text-white numbers py-2">
              PORTFOLIO
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
