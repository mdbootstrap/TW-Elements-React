import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";

const svg = {
  light: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 inline-block"
    >
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  ),
  dark: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 inline-block"
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clipRule="evenodd"
      />
    </svg>
  ),
  system: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="inline-block w-4"
      role="img"
      viewBox="0 0 640 512"
    >
      <path
        fill="currentColor"
        d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"
      />
    </svg>
  ),
};

const ThemeSwitcher: React.FC = (): JSX.Element => {
  const switcher = useRef<HTMLDivElement | null>(null);
  const switcherButton = useRef<HTMLButtonElement>(null);

  const [activeTheme, setActiveTheme] = useState<string>("light");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const dropdownMenuClasses = clsx(
    "min-w-max absolute bg-white text-base z-[1000] overflow-hidden float-left list-none text-left rounded-lg shadow-lg m-0 bg-clip-padding border-none [&[data-te-dropdown-show]]:block dark:bg-neutral-800",
    showDropdown ? "block -translate-x-full -translate-y-full" : "hidden"
  );

  const setSystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setActiveTheme("system");
    setShowDropdown(false);
    localStorage.removeItem("theme");
  };

  const setDarkTheme = () => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";

    setActiveTheme("dark");
    setShowDropdown(false);
  };

  const setLightTheme = () => {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";

    setActiveTheme("light");
    setShowDropdown(false);
  };

  const onThemeSwitcherShortCut = () => {
    if (!("theme" in localStorage)) {
      document.querySelector("html")?.classList.contains("dark")
        ? setLightTheme()
        : setDarkTheme();
      return;
    } else if (localStorage.theme === "dark") {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  const handleShortcut = (event: KeyboardEvent) => {
    if (
      document.activeElement === document.body &&
      event.key.toLocaleLowerCase() === "d" &&
      event.shiftKey
    ) {
      onThemeSwitcherShortCut();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!switcher.current?.contains(event.target as Node)) {
      setShowDropdown(false);
      return;
    }
  };

  useEffect(() => {
    if (!("theme" in localStorage)) {
      setSystemTheme();
    } else if (localStorage.theme === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleShortcut);
    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  return (
    <>
      <div
        className="fixed right-5 bottom-5 z-[9999]"
        id="theme-switcher"
        ref={switcher}
      >
        <div className="relative" data-te-dropdown-ref>
          <button
            ref={switcherButton}
            className="w-[30px] h-[30px] text-neutral-800 dark:text-white uppercase rounded-full hover:shadow-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:bg-neutral-300 dark:focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center justify-center whitespace-nowrap motion-reduce:transition-none"
            type="button"
            id="themeSwitcher"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {svg[activeTheme as keyof typeof svg]}
          </button>
          <ul
            className={dropdownMenuClasses}
            aria-labelledby="themeSwitcher"
            data-te-dropdown-menu-ref
          >
            <li className="scale-[0.8] text py-1 flex justify-center items-center text-gray-400 font-bold">
              <svg
                className="-ml-1 fill-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
              >
                <path d="M7 17v-5.792H3L10 2l7 9.208h-4V17Zm1.5-1.5h3V9.708h2.438L10 4.438l-3.938 5.27H8.5ZM10 9.708Z" />
              </svg>
              <span className="ml-1 mr-2">+</span>
              <span>D</span>
            </li>
            <li>
              <a
                className="text-sm py-2 px-3 font-normal block w-full whitespace-nowrap bg-transparent text-neutral-700 dark:text-neutral-100 hover:bg-neutral-100 disabled:text-neutral-400 disabled:pointer-events-none disabled:bg-transparent active:no-underline active:text-neutral-800 dark:hover:bg-neutral-600 focus:outline-none focus:bg-neutral-200 focus:dark:bg-neutral-600"
                style={
                  activeTheme === "light" ? { color: "rgb(101,144,213)" } : {}
                }
                href="#"
                data-theme="light"
                data-te-dropdown-item-ref
                onClick={setLightTheme}
              >
                <div className="pointer-events-none">
                  <div
                    className="inline-block w-[24px] text-center"
                    data-theme-icon="light"
                  >
                    {svg.light}
                  </div>
                  <span data-theme-name="light">Light</span>
                </div>
              </a>
            </li>
            <li>
              <a
                className="text-sm py-2 px-3 font-normal block w-full whitespace-nowrap bg-transparent text-neutral-700 dark:text-neutral-100 hover:bg-neutral-100 disabled:text-neutral-400 disabled:pointer-events-none disabled:bg-transparent active:no-underline active:text-neutral-800 dark:hover:bg-neutral-600 focus:outline-none focus:bg-neutral-200 focus:dark:bg-neutral-600"
                style={
                  activeTheme === "dark" ? { color: "rgb(101,144,213)" } : {}
                }
                href="#"
                data-theme="dark"
                data-te-dropdown-item-ref
                onClick={setDarkTheme}
              >
                <div className="pointer-events-none">
                  <div
                    className="inline-block w-[24px] text-center"
                    data-theme-icon="dark"
                  >
                    {svg.dark}
                  </div>
                  <span data-theme-name="dark">Dark</span>
                </div>
              </a>
            </li>
            <li>
              <a
                className="text-sm py-2 px-3 font-normal block w-full whitespace-nowrap bg-transparent text-neutral-700 dark:text-neutral-100 hover:bg-neutral-100 disabled:text-neutral-400 disabled:pointer-events-none disabled:bg-transparent active:no-underline active:text-neutral-800 dark:hover:bg-neutral-600 focus:outline-none focus:bg-neutral-200 focus:dark:bg-neutral-600"
                style={
                  activeTheme === "system" ? { color: "rgb(101,144,213)" } : {}
                }
                href="#"
                data-theme="system"
                data-te-dropdown-item-ref
                onClick={setSystemTheme}
              >
                <div className="pointer-events-none">
                  <div
                    className="inline-block w-[24px] text-center"
                    data-theme-icon="system"
                  >
                    {svg.system}
                  </div>
                  <span data-theme-name="system">System</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
