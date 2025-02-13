import { ImageResponse } from "next/og";

// 这个不能去除，不然vercel正式部署就会出现bug
export const runtime = "nodejs";
// Image metadata
export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
      >
        Jin
      </div>
    ),
    {
      ...size,
    }
  );
}
