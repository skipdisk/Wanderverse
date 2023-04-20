import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import styles from "./Main.module.sass";
import Arrow from "@/components/Arrow";
import Item from "./Item";

const list = [
  {
    title: "The creator network.",
    collection: "Escape II",
    price: "10.00 ETH",
    reserve: "2.38 ETH",
    image: "/images/main-pic-1.jpg",
  },
  {
    title: "The creator network.",
    collection: "Escape I",
    price: "24.33 ETH",
    reserve: "5.64 ETH",
    image: "/images/main-pic-2.jpg",
    color: "#BCE6EC",
  },
  {
    title: "The creator network.",
    collection: "Escape III",
    price: "5.4 ETH",
    reserve: "1.45 ETH",
    image: "/images/auction-pic-2.jpg",
    color: "#B9A9FB",
  },
];

import { Navigation, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "@/components/Image";

type MainProps = {};

const Main = ({}: MainProps) => (
  <>
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.content}>
          <h1 className={cn("hero", styles.title)}>
            Where Imagination Meets Reality
          </h1>
          <h4 className={styles.subtitle}>
            In today's fast-paced digital age, independent artists struggle to
            gain visibility, find meaningful connections, and monetize their
            work effectively. The traditional channels for promoting art often
            lack inclusivity and fail to provide the flexibility and resources
            needed to thrive in the ever-evolving landscape of art and
            technology.
          </h4>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.content}>
          <Image
            src={"/images/art/Subject-3.png"}
            width={1000}
            height={1000}
            layout="intrinsic"
            objectFit="scale-down"
            alt="Background"
          />
        </div>
      </div>
    </div>
    <div className={styles.wrapper}>
      <Swiper
        navigation={true}
        loop={false}
        modules={[Navigation, Scrollbar]}
        className="vertical-swiper"
        direction="vertical"
        scrollbar={{
          hide: true,
        }}
        speed={700}
        breakpoints={{
          320: {
            direction: "horizontal",
          },
          1024: {
            direction: "vertical",
          },
        }}
      >
        {list.map((x, index) => (
          <SwiperSlide key={index}>
            <Item item={x} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);

export default Main;
