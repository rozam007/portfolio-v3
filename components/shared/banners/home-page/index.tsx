import styles from "./styles.module.scss";
import Heading from "./heading";
import { RefObject } from "react";
import { ScrollAlert } from "#/components";
import Image from "next/image";
import bannerImg from "#/public/home-banner.png";

type Props = {
  bannerRef: RefObject<HTMLDivElement>;
  bannerHeight: number | undefined;
};

export default function Banner({ bannerRef, bannerHeight }: Props) {
  const fieldA = "SOFTWARE";
  const fieldB = "ENGINEER";
  const nameA = "DAUD";
  const nameB = "RAUF";

  return (
    <>
      <header className={styles.banner} ref={bannerRef} style={{ minHeight: bannerHeight + "px" }}>
        <div className={styles.topSection}>
          <div className={styles.topSectionTexts}>
            <div data-key="field">
              <Heading text={fieldA} revealOrigin="left" />
              <Heading text={fieldB} revealOrigin="left" />
            </div>
            <h2 className={styles.subfieldwrapper}>
              <div className={styles.subfieldtext} data-key="sub-field">
                <span></span> Back end addicted
              </div>
            </h2>
          </div>

          <div>
            <div className={styles.desktopImage}>
              <Image src={bannerImg} layout="fill" objectFit="cover" alt="Profile picture" />
              <span className={styles.blind} data-key="desktop-image-blind"></span>
            </div>
            <div className={styles.mobileImage} data-key="mobile-image">
              <Image src={bannerImg} layout="fill" objectFit="cover" alt="Profile picture" />
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <ScrollAlert propStyles={styles.scrollAlert} />

          <div className={styles.bottomSectionText}>
            <h2 className={styles.subfieldwrapper}>
              <div className={styles.subfieldtext} data-key="sub-field">
                <span></span> Full stack capable
              </div>
            </h2>

            <div data-key="name">
              <Heading text={nameA} revealOrigin="right" />
              <Heading text={nameB} revealOrigin="right" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
