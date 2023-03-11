import { Link } from "react-router-dom";

import React from "react";

const SidebarSection = () => {
  const urls = [
    { url: "/", name: "Anasayfa" },
    { url: "/iletisim", name: "İletişim" },
  ];

  return (
    <div className="z-30 flex flex-col items-center justify-between fixed h-screen w-2/3 md:w-1/2 lg:w-1/3 2xl:w-1/4 top-0 right-0 p-10 bg-layer-light-50 dark:bg-layer-dark-900  border-l border-layer-light-100 dark:border-layer-dark-700 shadow-lg animate__animated animate__fadeInRight animate__faster">
      <h2>Logo</h2>
      <ul className="flex flex-col gap-4">
        {urls.map((url) => (
          <li key={url.name}>
            <Link
              className="text-xl font-semibold text-layer-dark-900 dark:text-layer-light-50 hover:underline hover:underline-offset-4 transition-all duration-500"
              to={url.url}>
              {url.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center gap-4">
        <span className="text-xs font-light text-layer-dark-900 dark:text-layer-light-50 transition-all duration-500">
          COpyright &copy; 2023
        </span>
        <span className="text-xs font-light text-layer-dark-900 dark:text-layer-light-50 transition-all duration-500">
          Version 0.0.1
        </span>
      </div>
    </div>
  );
};

export default SidebarSection;
