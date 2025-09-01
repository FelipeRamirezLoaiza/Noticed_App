import React from "react";
import "../assets/css/StyleTienda.css";
import ProductCard from "../components/commons/ProductCard/ProductCard.jsx";

function Tienda() {
  // Definir productos
  const productos = [
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced verde", description: "Oversize con capucha" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced rojo", description: "Edición limitada" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced negro", description: "Unisex estilo urbano" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced verde", description: "Oversize con capucha" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced rojo", description: "Edición limitada" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced negro", description: "Unisex estilo urbano" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced verde", description: "Oversize con capucha" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced rojo", description: "Edición limitada" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced negro", description: "Unisex estilo urbano" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced verde", description: "Oversize con capucha" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced rojo", description: "Edición limitada" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced negro", description: "Unisex estilo urbano" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced verde", description: "Oversize con capucha" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced rojo", description: "Edición limitada" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced negro", description: "Unisex estilo urbano" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced verde", description: "Oversize con capucha" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced rojo", description: "Edición limitada" },
    { img1: "/img/slider1.png", img2: "/img/slider2.png", title: "Buso Noiced negro", description: "Unisex estilo urbano" },
  ];

  return (
    <div>
      {/* Sección de opciones */}
      <section className="options">
        <div className="categories">
          <a href="#"><img src="/img/option1.png" alt="option1" /></a>
          <a href="#"><img src="/img/option2.png" alt="option2" /></a>
          <a href="#"><img src="/img/option3.png" alt="option3" /></a>
        </div>
      </section>

      {/* Productos en filas */}
      <div className="container">
        {productos.map((p, index) => (
            <ProductCard
                key={index}
                img1={p.img1}
                img2={p.img2}
                title={p.title}
                description={p.description}
            />
        ))}
      </div>
    </div>
  );
}

export default Tienda