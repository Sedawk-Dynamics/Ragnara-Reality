import { ImageResponse } from "next/og"

export const runtime = "edge"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #c9a961 0%, #2d2d2d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Regnara Infra
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
