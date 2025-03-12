import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import BlissLogo from "../../images/logos/bliss.png";
import TouchwoodLogo from "../../images/logos/touchwood.png";
import LifespacesLogo from "../../images/logos/lifespaces.png";
import WeddingLogo from "../../images/logos/fairytale.png";
import SwayamLogo from "../../images/logos/swayam.png";
import BeeyondLogo from "../../images/logos/beeyond.png";
import AnayaLogo from "../../images/logos/anaya.png";
import NativeShirdi from "../../images/logos/nativeshirdi.png";
import TheBrandYogi from "../../images/logos/brandyogi.png";
import Avani from "../../images/logos/avani.png";
import Sparkle from "../../images/logos/sparkle.png";
import "./client.css";

const Client = () => {
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

  const allClients = [
    { logo: BlissLogo, size: "clientbig" },
    { logo: TouchwoodLogo, size: "clientxsmall" },
    { logo: LifespacesLogo, size: "clientxsmall" },
    { logo: WeddingLogo, size: "clientbig" },
    { logo: SwayamLogo, size: "clientbig" },
    { logo: BeeyondLogo, size: "clientbig" },
    { logo: AnayaLogo, size: "clientxsmall" },
    { logo: NativeShirdi, size: "clientbig" },
    { logo: TheBrandYogi, size: "clientxbig" },
    { logo: Avani, size: "clientxsmall" },
    { logo: Sparkle, size: "clientxbig" },
  ];

  const upperClient = [
    { logo: BlissLogo, size: "clientxsmall" },
    { logo: TouchwoodLogo, size: "clientmob" },
    { logo: LifespacesLogo, size: "clientmob" },
    { logo: WeddingLogo, size: "clientxsmall" },
    { logo: SwayamLogo, size: "clientxsmall" },
  ];

  const lowerClient = [
    { logo: BeeyondLogo, size: "clientxsmall" },
    { logo: AnayaLogo, size: "clientmob" },
    { logo: NativeShirdi, size: "clientxsmall" },
    { logo: TheBrandYogi, size: "clientxsmall" },
    { logo: Avani, size: "clientmob" },
    { logo: Sparkle, size: "clientxsmall" },
  ];
  return (
    <>
      <div className="position-relative client_bannner d-none d-sm-none d-md-block py-15">
        <canvas
          ref={canvasRef}
          className="client_banner_hex"
          style={{ pointerEvents: "none" }}
        />
        <h4 className="client_head" >Our Clients</h4>

        <div className="marquee-client">
          <Marquee autoFill={true} speed={50} pauseOnHover={true}>
            {allClients.map((item, i) => (
              <div className="brand-logo-wrapper" key={i}>
                <img
                  src={item.logo}
                  className={`img-fluid ${item.size}`}
                  alt="Client Logo"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="position-relative client_bannner py-15 d-block d-sm-block d-md-none">
        <div className="pb-20">
          <h4 className="client_head">Our Clients</h4>
        </div>

        <div className="">
          <Marquee autoFill={true} speed={50} pauseOnHover={true}>
            {upperClient.map((item, i) => (
              <div className="brand-logo-wrapper" key={i}>
                <img
                  src={item.logo}
                  className={`img-fluid ${item.size}`}
                  alt="Client Logo"
                />
              </div>
            ))}
          </Marquee>
          <Marquee
            autoFill={true}
            speed={50}
            pauseOnHover={true}
            direction="right"
            className="mt-5 pt-4"
          >
            {lowerClient.map((item, i) => (
              <div className="brand-logo-wrapper" key={i}>
                <img
                  src={item.logo}
                  className={`img-fluid ${item.size}`}
                  alt="Client Logo"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Client;
