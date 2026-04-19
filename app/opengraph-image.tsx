import { ImageResponse } from "next/og";
import { company } from "@/content/company";

export const runtime = "edge";
export const alt = company.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(ellipse at 80% 10%, #1d3a6a 0%, #0F2747 60%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#D4A24C",
              color: "#0F2747",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            A
          </div>
          <span>{company.name}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ margin: 0, color: "#D4A24C", fontSize: 22, letterSpacing: 2, textTransform: "uppercase" }}>
            Corredora de seguros · {company.yearsExperience}+ años en Chile
          </p>
          <h1 style={{ margin: 0, fontSize: 80, fontWeight: 600, lineHeight: 1.05, letterSpacing: -1 }}>
            Te protegemos a ti,
            <br />
            tu familia y tus inversiones.
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.75)",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 28,
          }}
        >
          <span>segurosaegis.cl</span>
          <span>CMF · ANS</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
