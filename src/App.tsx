function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <section className="text-center">
        <h1 className=" text-4xl font-days-one mb-4">
          Template by <span className="text-green-yellow">Jose Waldo</span>
        </h1>
        <p className="font-medium text-[1.2rem] text-grey-border">
          Template creada para agilizar la configuración de los proyectos ademas
          de tener lista la paleta de colores
        </p>
      </section>
      <a href="#" className="btn">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_303_151)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.47616 0C4.06555 0 0.5 3.54839 0.5 7.93823C0.5 11.4473 2.78457 14.4176 5.95388 15.4689C6.35012 15.5479 6.49527 15.2981 6.49527 15.0879C6.49527 14.9039 6.4822 14.2731 6.4822 13.6158C4.26343 14.089 3.80139 12.6695 3.80139 12.6695C3.44482 11.7495 2.91649 11.5131 2.91649 11.5131C2.19029 11.0268 2.96939 11.0268 2.96939 11.0268C3.77494 11.0794 4.19763 11.8416 4.19763 11.8416C4.91061 13.0506 6.05951 12.709 6.52171 12.4987C6.58767 11.9861 6.7991 11.6313 7.02359 11.4342C5.25396 11.2502 3.39208 10.5668 3.39208 7.51758C3.39208 6.65016 3.70882 5.94048 4.21069 5.38855C4.13151 5.19145 3.85412 4.37645 4.29004 3.28565C4.29004 3.28565 4.96351 3.07532 6.48204 4.10048C7.13218 3.92672 7.80265 3.83833 8.47616 3.83758C9.14963 3.83758 9.83616 3.92968 10.4701 4.10048C11.9888 3.07532 12.6623 3.28565 12.6623 3.28565C13.0982 4.37645 12.8207 5.19145 12.7415 5.38855C13.2566 5.94048 13.5602 6.65016 13.5602 7.51758C13.5602 10.5668 11.6984 11.2369 9.91551 11.4342C10.2061 11.6839 10.4569 12.1569 10.4569 12.9061C10.4569 13.9706 10.4438 14.825 10.4438 15.0877C10.4438 15.2981 10.5891 15.5479 10.9852 15.469C14.1545 14.4174 16.4391 11.4473 16.4391 7.93823C16.4522 3.54839 12.8736 0 8.47616 0Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_303_151">
              <rect
                width="16"
                height="15.4839"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        Visita mi Github
      </a>

      <footer className="footer">
        <div className="flex flex-row-reverse gap-2 justify-center items-center">
          <p className="text-lg">
            Diseñado por <span className="text-green-yellow">Jose Waldo</span>
          </p>
          <img className="w-10" src="isotipo.svg" alt="Isotipo" />
        </div>
      </footer>
    </main>
  );
}

export default App;
