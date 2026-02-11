import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

export default function ValentineMosaic() {
  const { ref: headerRef, inView: headerVisible } = useInView({
    threshold: 0.3,
  });
  const [headerAnim, setHeaderAnim] = useState(false);
  const { ref: footerRef, inView: footerVisible } = useInView({
    threshold: 0.3,
  });
  const [footerAnim, setFooterAnim] = useState(false);

  useEffect(() => {
    if (headerVisible) setHeaderAnim(true);
  }, [headerVisible]);

  useEffect(() => {
    if (footerVisible) setFooterAnim(true);
  }, [footerVisible]);

  // List of all images in the valentine folder
  const images = [
    "IMG-20250910-WA0046.jpg",
    "IMG_20241013_113455.jpg",
    "IMG_20241013_140602.jpg",
    "IMG_20241110_202446.jpg",
    "IMG_20241111_105819_1.jpg",
    "IMG_20241112_152324.jpg",
    "IMG_20250827_191507.jpg",
    "IMG_20241112_173507.jpg",
    "IMG_20250804_180116.jpg",
    "IMG_20241114_185535.jpg",
    "IMG_20241115_145049.jpg",
    "IMG-20241231-WA0001.jpg",
    "IMG_20241116_145925.jpg",
    "IMG_20241208_181651.jpg",
    "IMG_20250104_224543.jpg",
    "IMG_20250208_215722.jpg",
    "IMG-20250913-WA0009.jpg",
    "IMG_20250327_111601.jpg",
    "IMG_20250328_141647.jpg",
    "IMG_20250911_134528.jpg",
    "Locket_1717363401471_56.jpg",
  ];

  return (
    <div className="valentine-container">
      <header
        ref={headerRef}
        className={classNames("valentine-header", { animate: headerAnim })}
      >
        <h1>Alcuni dei nostri momenti...</h1>
      </header>

      <div className="mosaic-columns">
        {images.map((image, index) => (
          <MosaicItem key={image} image={image} index={index} />
        ))}
      </div>

      <footer
        ref={footerRef}
        className={classNames("valentine-footer", { animate: footerAnim })}
      >
        <p>Buon san Valentino Amore ❤️</p>
      </footer>
    </div>
  );
}

function MosaicItem({ image, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      // Stagger animation based on index
      setTimeout(() => setAnimate(true), index * 50);
    }
  }, [inView, index]);

  return (
    <div
      ref={ref}
      className={classNames("mosaic-item", { animate })}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <img
        src={`/valentine/${image}`}
        alt={`Memory ${index + 1}`}
        loading="lazy"
      />
    </div>
  );
}
