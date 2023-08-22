import React, { useRef, useEffect } from "react";

const ProductListPage: React.FC = () => {
  const ProductListRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ProductListRef.current) {
      ProductListRef.current.indeterminate = true;
    }
  }, []);

  return (
    <>
      <h1 className="max-w-7xl mx-auto">With inline price</h1>
      <div className="mt-12 bg-white dark:bg-neutral-800">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700  dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500  dark:text-white">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900  dark:text-white">$35</p>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700  dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500  dark:text-white">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900  dark:text-white">$35</p>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700  dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500  dark:text-white">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900  dark:text-white">$35</p>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700  dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500  dark:text-white">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900  dark:text-white">$35</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <h1 className="max-w-7xl mx-auto">Simple</h1>
      <div className="mt-12 bg-white dark:bg-neutral-800 ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 dark:text-white">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">$48</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 dark:text-white">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">$48</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 dark:text-white">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">$48</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 dark:text-white">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">$48</p>
            </a>
          </div>
        </div>
      </div>
<hr />

      <h1 className="max-w-7xl mx-auto">With image overlay and add button</h1>

      <div className="mt-12 bg-white dark:bg-neutral-800">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl text-gray-700 font-bold mb-6 dark:text-white">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <div>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden	 rounded-lg	">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg"
                    alt="Apple's Latest SmartPhone"
                    className="h-full w-full object-cover	object-center	"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium	 text-gray-900	dark:text-white">
                    IPhone 13{" "}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-white">Apple</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end	 justify-end	 overflow-hidden rounded-lg	 p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t	 from-black	 opacity-50	"
                  />
                  <p className="relative text-lg	 awg text-white font-semi-bold	">
                    &#8377;700{" "}
                  </p>
                </div>
                <div className="mt-5">
                  <a
                    href="#"
                    className="relative flex items-center justify-center rounded-md border-1 border-transparent	 bg-gray-100	 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200	"
                  >
                    Add to bag
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden	 rounded-lg	">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg"
                    alt="Apple's Latest SmartPhone"
                    className="h-full w-full object-cover	object-center	"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium	 text-gray-900	dark:text-white">
                    IPhone 13{" "}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-white">Apple</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end	 justify-end	 overflow-hidden rounded-lg	 p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t	 from-black	 opacity-50	"
                  />
                  <p className="relative text-lg	 awg text-white font-semi-bold	">
                    &#8377;700{" "}
                  </p>
                </div>
                <div className="mt-5">
                  <a
                    href="#"
                    className="relative flex items-center justify-center rounded-md border-1 border-transparent	 bg-gray-100	 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200	"
                  >
                    Add to bag
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden	 rounded-lg	">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg"
                    alt="Apple's Latest SmartPhone"
                    className="h-full w-full object-cover	object-center	"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium	 text-gray-900	dark:text-white">
                    IPhone 13{" "}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-white">Apple</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end	 justify-end	 overflow-hidden rounded-lg	 p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t	 from-black	 opacity-50	"
                  />
                  <p className="relative text-lg	 awg text-white font-semi-bold	">
                    &#8377;700{" "}
                  </p>
                </div>
                <div className="mt-5">
                  <a
                    href="#"
                    className="relative flex items-center justify-center rounded-md border-1 border-transparent	 bg-gray-100	 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200	"
                  >
                    Add to bag
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden	 rounded-lg	">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg"
                    alt="Apple's Latest SmartPhone"
                    className="h-full w-full object-cover	object-center	"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium	 text-gray-900	dark:text-white">
                    IPhone 13{" "}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-white">Apple</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end	 justify-end	 overflow-hidden rounded-lg	 p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t	 from-black	 opacity-50	"
                  />
                  <p className="relative text-lg	 awg text-white font-semi-bold	">
                    &#8377;700{" "}
                  </p>
                </div>
                <div className="mt-5">
                  <a
                    href="#"
                    className="relative flex items-center justify-center rounded-md border-1 border-transparent	 bg-gray-100	 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200	"
                  >
                    Add to bag
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<hr />
      <h1 className="max-w-7xl mx-auto">With tall images and CTA link</h1>
      <div className=" bg-white dark:bg-neutral-800">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl text-gray-700 dark:text-white font-bold mb-6">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 dark:text-white">Earthen Bottle</h3>
              <p className="mt-1 text-sm  text-gray-400 dark:text-white">$48</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 dark:text-white">Earthen Bottle</h3>
              <p className="mt-1 text-sm  text-gray-400 dark:text-white">$48</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 dark:text-white">Earthen Bottle</h3>
              <p className="mt-1 text-sm  text-gray-400 dark:text-white">$48</p>
            </a>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
