import { useEffect, useRef } from "react";

const HexCanvas = () => {
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
      [canvW, canvH] = [window.innerWidth, window.innerHeight];
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
    <div className="main_banner position-relative t-up overflow-x-hidden">
      <canvas ref={canvasRef} className="mainhexcanvas" />
      <div className="row main-text">
        <div className="col-lg-12 text-center">
          <h2 className="banner_head">
            360° Marketing, Infinite Possibilities - Building Brands That{" "}
            <span>Inspire, Connect & Last</span>
          </h2>
        </div>
      </div>
      <section className="d-block d-sm-block d-md-none">
        <div className="row align-items-center t-up-mob">
          <div className="col-lg-4 d-flex justify-content-center align-items-center position-relative order-md-1 order-3">
            <div className="row justify-content-center mt-4 mt-sm-3 mt-md-0">
              <div className="col-lg-12 text-center text-sm-start text-md-start">
                <div className="about_para d-none d-sm-none d-md-block">
                  <p>
                    From strategy to storytelling ,<br /> digital to design—we
                    craft <br />
                    Brands Beeyond expectations.
                  </p>
                </div>
                <div className="about_para d-block d-sm-block d-md-none">
                  <p>
                    From strategy to storytelling , digital to design—we craft
                    Brands Beeyond expectations.
                  </p>
                </div>
                <div className="mt-3 mt-sm-4 mt-md-5">
                  <button className="btn mainbtn">
                    Start your project <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex justify-content-center order-2 order-md-3">
            <div className="bnb_video position-relative">
              <div className="hexagon-sec d-flex flex-row align-items-start align-items-sm-end  gap-2 gap-sm-3 gap-md-5">
                <div className="hexagon-big order-2"></div>
                <div className="hexagon-small order-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HexCanvas;
