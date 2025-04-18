"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./carousel.module.scss";
import Card from "./card/card";

const images = [
  "https://mblogthumb-phinf.pstatic.net/MjAyMzA0MjVfNDUg/MDAxNjgyNDE5ODE5NzU1.CD7rNeAn5qkLqiShxbB5oLKDF2A4QS9rlQJc0bKY7nYg.0THhuGww_OLE--Q8ZZMfpBwnhnFNnKBWIv-ben4Kjl4g.PNG.dbdnrl7/%EB%B4%87%EC%B9%98%EB%8D%94%EB%9D%BD_17.png?type=w800",
  "https://resources.chimhaha.net/article/1712335587074-54mrj8v7nj9.webp",
  "https://www.ishamelon.com/wp-content/uploads/2024/03/image-127.png",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const extendedImages = [images[images.length - 1], ...images, images[0]]; // 복사본 ( 양 끝은 트릭 이미지 )

  const moveTo = (index: number, withTransition = true) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.transition = withTransition ? "transform 0.2s ease" : "none";
    wrapper.style.transform = `translateX(-${index * 100}%)`;

    setCurrentIndex(index);
    setIsTransitioning(true);
  };

  const resetPosition = () => {
    // 트릭 이미지 처리 ( 양 끝 트릭 이미지로 넘어가야할 때, 원래 번호로 효과 없이 이동 )
    if (currentIndex === 0) {
      moveTo(images.length, false);
    } else if (currentIndex === images.length + 1) {
      moveTo(1, false);
    }
    setTimeout(() => {
      setIsTransitioning(false);
    }, 150);
  };

  const next = () => moveTo(currentIndex + 1);
  const prev = () => moveTo(currentIndex - 1);

  const startAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      next();
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleTransitionEnd = () => {
      resetPosition();
    };

    wrapper.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      wrapper.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex]);

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (isTransitioning) return;
    if ("touches" in e) {
      startX.current = e.touches[0].clientX;
    } else {
      startX.current = e.clientX;
    }
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (isTransitioning || startX.current === null) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    deltaX.current = clientX - startX.current;

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.style.transition = "none";
      const offset =
        -currentIndex * 100 + (deltaX.current / window.innerWidth) * 100;
      wrapper.style.transform = `translateX(${offset}%)`;
    }
  };

  const onTouchEnd = () => {
    if (isTransitioning) return;

    if (deltaX.current > 50) {
      prev();
    } else if (deltaX.current < -50) {
      next();
    } else {
      moveTo(currentIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 20);
    }

    deltaX.current = 0;
    startX.current = null;
  };

  return (
    <div
      className={styles["wrapper"]}
      onMouseDown={onTouchStart}
      onMouseMove={(e) => e.buttons === 1 && onTouchMove(e)}
      onMouseUp={onTouchEnd}
      onMouseLeave={() => {
        if (startX.current !== null) onTouchEnd();
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className={styles["slides"]}
        ref={wrapperRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "none",
        }}
      >
        {extendedImages.map((src, idx) => (
          <Card image={src} key={idx} />
        ))}
      </div>
    </div>
  );
}
