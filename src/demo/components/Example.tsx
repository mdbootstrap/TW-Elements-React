import React, { ReactNode, useEffect, useRef, useState } from "react";

interface ExampleProps {
  children: ReactNode;
  path: string;
  fullscreenOnly?: boolean;
}

const Example: React.FC<ExampleProps> = ({
  children,
  path,
  fullscreenOnly,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const listenerNotAdded = useRef(true);
  const exampleRef = useRef<HTMLDivElement>(null);
  let resizeTimeout: ReturnType<typeof setTimeout>;
  let mountingTimeout: ReturnType<typeof setTimeout>;

  const postHeight = () => {
    window.parent.postMessage(
      { height: exampleRef.current?.scrollHeight, path: path },
      "*"
    );
  };

  const resizeObserver = new ResizeObserver(() => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      postHeight();
    }, 5);
  });

  const handleDarkMode = (event: MessageEvent) => {
    const html = document.querySelector("html") as HTMLHtmlElement;
    event.data.darkmode
      ? html.classList.add("dark")
      : html.classList.remove("dark");
  };

  const receiveMessage = (event: MessageEvent) => {
    if (event.data.darkmode !== undefined) {
      handleDarkMode(event);
      return;
    }
    postHeight();
  };

  useEffect(() => {
    postHeight();

    fullscreenOnly
      ? document.body.classList.add("overflow-x-hidden")
      : document.body.classList.add("overflow-hidden");
    resizeObserver.observe(exampleRef.current as HTMLDivElement);

    return () => {
      clearTimeout(resizeTimeout);

      fullscreenOnly
        ? document.body.classList.remove("overflow-x-hidden")
        : document.body.classList.remove("overflow-hidden");
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (listenerNotAdded.current) {
      window.addEventListener("message", (event) => receiveMessage(event));
      listenerNotAdded.current = false;
    }
    mountingTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => {
      window.removeEventListener("message", (event) => receiveMessage(event));
      clearTimeout(mountingTimeout);
    };
  }, []);

  return <div ref={exampleRef}>{isLoaded && children}</div>;
};

export default Example;
