import localFont from "next/font/local"

export const bricolageGrotesque = localFont({
  src: [
    {
      path: "./Bricolage_Grotesque/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bricolage-grotesque",
})

export const dmSans = localFont({
  src: [
    { path: "./DM_Sans/DMSans-VariableFont_opsz,wght.ttf", style: "normal" },
    {
      path: "./DM_Sans/DMSans-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
})
