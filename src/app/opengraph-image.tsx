import { ImageResponse } from "next/og";

export const alt = "Next Design — Asheville web design and development studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "68px 76px",
        color: "white",
        background: "radial-gradient(circle at 78% 28%, #342078 0%, #10091f 34%, #030304 70%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: ".2em" }}>NEXT DESIGN</div>
        <div style={{ fontSize: 18, color: "#aaa5b7" }}>Asheville · North Carolina</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
        <div style={{ fontSize: 22, color: "#a778ff", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 24 }}>
          Web design · Development · AI
        </div>
        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: .98, letterSpacing: "-.055em" }}>
          Digital experiences built to stand apart.
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 19, color: "#c5c1ce" }}>
        <div style={{ width: 70, height: 3, background: "linear-gradient(90deg,#3b82f6,#a855f7)" }} />
        nextdesign.dev
      </div>
    </div>,
    size,
  );
}
