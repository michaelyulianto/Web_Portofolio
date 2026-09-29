import Image from "next/image";
import PhotoDevelop from "@/components/PhotoDevelop";
import { photos } from "@/data/photos";

export default function OffScreen() {
  return (
    <section className="offscreen" id="off-screen" aria-labelledby="offscreen-title">
      <div className="offscreen__header page-shell">
        <div className="offscreen__title-row">
          <h2 id="offscreen-title">Off screen<span>.</span></h2>
          <span className="offscreen__section-no" aria-hidden="true">03</span>
        </div>
        <div className="offscreen__intro-row">
          <p>I occasionally close the laptop and let the camera have a turn.</p>
          <span className="mono-label">Six frames / one contact sheet</span>
        </div>
      </div>

      <PhotoDevelop>
        {photos.map((photo) => (
          <figure className={`offscreen__frame offscreen__frame--${photo.no}`} key={photo.no}>
            <div className="offscreen__mat">
              <span className="offscreen__frame-label mono-label" aria-hidden="true">Frame / {photo.no}</span>
              <Image
                className="offscreen__image"
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) 44vw, (max-width: 1439px) 56vw, 760px"
                loading="lazy"
              />
            </div>
            <figcaption className="offscreen__caption mono-label">
              <span aria-hidden="true">{photo.no} / 06</span>
              <span>{photo.caption}</span>
            </figcaption>
          </figure>
        ))}
      </PhotoDevelop>

      <div className="offscreen__bottomline mono-label page-shell">
        <span>03 / Off screen</span>
        <span>End of frame / 003</span>
      </div>
    </section>
  );
}
