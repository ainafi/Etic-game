import { HoverEffect } from "../components/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Reduction des prix",
    description:
      "si vous acheter des films plus de 3 il y a une reduction 1000MGA",
  },
  {
    title: "Divers choix ",
    description:
      "plusieur categorie a choisir et de qualite 1080p,720p,.",
  },
  {
    title: "Produit a jours",
    description:
      "Des nouveautes chaque jours",
  },
];
