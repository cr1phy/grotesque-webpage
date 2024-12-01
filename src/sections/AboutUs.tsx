import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const AboutUs: React.FC = () => {
  const slideRefs = useRef<HTMLDivElement[]>([]); // Массив ссылок на слайды
  const [currentSlide, setCurrentSlide] = useState(0); // Индекс текущего слайда

  const slides = [
    'Мы — команда "Гротеск". Наша цель — объединить технические инновации и творчество, создавая продукты, которые решают реальные проблемы, одновременно вызывая эмоции и вдохновение у пользователей.',
    "На этом хакатоне наша команда стремится создать инновационный продукт, который не только будет технически совершенен, но и по-настоящему красив.",
    "Мы будем использовать новейшие подходы в области ИИ, чтобы создать уникальный пользовательский опыт, интегрируя машинное обучение.",
    "Команда 'Гротеск' работает над решениями, которые не только полезны, но и вдохновляют на новые достижения.",
    "Наша команда состоит из профессионалов: разработчиков, дизайнеров и аналитиков, готовых к любым вызовам.",
    '“Наука не стоит на месте, она всегда движется вперёд, и это движение невозможно без эксперимента.”',
  ];

  const goToSlide = (index: number) => {
    if (index < 0 || index >= slides.length) return;

    const current = slideRefs.current[currentSlide];
    const next = slideRefs.current[index];

    const direction = index > currentSlide ? "100%" : "-100%"; // Определяем направление
    const oppositeDirection = index > currentSlide ? "-100%" : "100%"; // Противоположное направление

    // Анимация
    gsap.to(current, {
      x: oppositeDirection,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.fromTo(
      next,
      { x: direction, autoAlpha: 0 },
      { x: "0%", autoAlpha: 1, duration: 0.8, ease: "power2.out" }
    );

    setCurrentSlide(index);
  };

  return (
    <div className="relative w-screen h-screen bg-black flex flex-col items-center justify-center">
      <h2 className="text-4xl font-serif font-bold mb-8 text-white text-center">О нас</h2>

      {/* Слайдер */}
      <div className="relative w-11/12 md:w-3/4 h-2/3 border border-white flex items-center justify-center overflow-hidden">
        {slides.map((text, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el!)}
            className={`absolute inset-0 flex items-center justify-center px-8 text-center ${
              index === 0 ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{
              visibility: index === currentSlide ? "visible" : "hidden",
              fontStyle: "italic",
            }}
          >
            <p className="max-w-3xl text-lg leading-relaxed text-white relative">
              {text.split(" ").map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block underline decoration-blue-500 decoration-2"
                >
                  {word}&nbsp; {/* Добавляем пробел */}
                </span>
              ))}
            </p>
          </div>
        ))}

        {/* Кнопки управления */}
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
          className="absolute left-4 bg-transparent border border-white w-12 h-12 flex items-center justify-center rounded-full text-white hover:opacity-70 disabled:opacity-30"
        >
          &#8592;
        </button>
        <button
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide === slides.length - 1}
          className="absolute right-4 bg-transparent border border-white w-12 h-12 flex items-center justify-center rounded-full text-white hover:opacity-70 disabled:opacity-30"
        >
          &#8594;
        </button>

        {/* Точки навигации */}
        <div className="absolute bottom-4 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index
                  ? "bg-white"
                  : "bg-transparent border border-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
