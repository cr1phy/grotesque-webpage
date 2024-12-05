import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { participants } from "../data/Data";
import TeamMemberCard from "../components/TeamMemberCard";

const Contacts: React.FC = () => {
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;

    const current = slideRefs.current[currentSlide];
    const next = slideRefs.current[index];

    const direction = index > currentSlide ? "-100%" : "100%";

    gsap.to(current, { x: direction, autoAlpha: 0, duration: 0.8, ease: "power2.out" });
    gsap.fromTo(
      next,
      { x: reverseDirection(direction), autoAlpha: 0 },
      { x: "0%", autoAlpha: 1, duration: 0.8, ease: "power2.out" }
    );

    setCurrentSlide(index);
  };

  const reverseDirection = (direction: string) => {
    return direction === "-100%" ? "100%" : "-100%";
  };

  return (
    <section
      id="contacts"
      className="relative overflow-hidden w-screen h-screen bg-black text-white"
    >
      <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 text-4xl font-bold font-playfair bg-black px-4">
        Контакты
      </h2>

      <div className="relative w-full h-full">
        {participants.map((participant, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el!)}
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-all duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <TeamMemberCard {...participant} />
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {participants.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            } transition-colors duration-300`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Contacts;
