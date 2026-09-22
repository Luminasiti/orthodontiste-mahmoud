import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr Mahmoud Qalalwa — Orthodontiste Tunis",
    short_name: "Dr Qalalwa Ortho",
    description:
      "Cabinet d'orthodontie et orthopédie dento-faciale à Aïn Zaghouan Nord, Tunis (en face Hôpital Mongi Slim). Aligneurs invisibles et bagues.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0e63f3",
    icons: [
      {
        src: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/673ab723b32cf03625ba6e53_favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/sites/dentipai-c7ba31ad/home-v1-8ad5662a/images/673ab72a59d1843babc78ab0_webclip-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
