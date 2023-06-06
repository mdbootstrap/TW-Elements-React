import React, { ReactNode, useEffect, useRef } from "react";

interface ExampleProps {
  children: ReactNode;
  path: string;
}

const Example: React.FC<ExampleProps> = ({ children, path }) => {
  const exampleRef = useRef<HTMLDivElement>(null);
  let resizeTimeout: ReturnType<typeof setTimeout>;

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
    }, 20);
  });

  useEffect(() => {
    postHeight();

    document.body.classList.add("overflow-hidden");
    resizeObserver.observe(exampleRef.current as HTMLDivElement);

    return () => {
      clearTimeout(resizeTimeout);

      document.body.classList.remove("overflow-hidden");
      resizeObserver.disconnect();
    };
  }, []);

  return <div ref={exampleRef}>{children}</div>;
};

export default Example;
