import { business } from "@/data/business";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const NAVY = "#17235B";
const NAVY_DARK = "#0D1538";
const LEAF = "#83C341";

/**
 * OpenGraph görsel kompozisyonu (satori ile PNG'ye çevrilir).
 * Logo, satori'nin harici dosya okuyamaması nedeniyle aynı geometriyle
 * yeniden çizilir; oranlar bozulmaz.
 */
export function OgCard({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DARK} 100%)`,
        padding: 72,
        fontFamily: "sans-serif",
      }}
    >
      {/* Yeşil aksan */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 10,
          background: LEAF,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -140,
          top: -140,
          width: 480,
          height: 480,
          borderRadius: 480,
          background: "rgba(131,195,65,0.14)",
          display: "flex",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <div
          style={{
            width: 92,
            height: 92,
            borderRadius: 92,
            background: LEAF,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 78,
              height: 78,
              borderRadius: 78,
              background: NAVY,
              border: `4px solid ${LEAF}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            GK
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#FFFFFF", fontSize: 30, fontWeight: 700 }}>
            {business.name}
          </div>
          <div
            style={{
              color: LEAF,
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 3,
              marginTop: 6,
            }}
          >
            {`${business.city.toLocaleUpperCase(
              "tr-TR",
            )} • ${business.district.toLocaleUpperCase("tr-TR")}`}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {eyebrow ? (
          <div
            style={{
              color: LEAF,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 3,
              marginBottom: 18,
            }}
          >
            {eyebrow.toLocaleUpperCase("tr-TR")}
          </div>
        ) : null}

        <div
          style={{
            color: "#FFFFFF",
            fontSize: title.length > 70 ? 52 : 62,
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          color: "rgba(255,255,255,0.65)",
          fontSize: 22,
        }}
      >
        <div
          style={{
            width: 36,
            height: 4,
            borderRadius: 4,
            background: LEAF,
            display: "flex",
          }}
        />
        {business.address}
      </div>
    </div>
  );
}
