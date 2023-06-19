import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

export default function FullscreenModal(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <TERipple rippleColor="white">
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={() => setShowModal(true)}
        >
          Launch demo modal full screen
        </button>
      </TERipple>

      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal} scrollable>
        <TEModalDialog size="fullscreen">
          <TEModalContent>
            <TEModalHeader>
              {/* <!-- Modal title --> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Modal title
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <p className="px-10 text-center leading-[3rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique nesciunt repellat consectetur rem nam, facere,
                expedita perspiciatis accusamus beatae aliquid dicta fugit ab
                minima qui inventore. Animi tenetur tempore consequuntur!
                Ducimus, praesentium, debitis iusto repellendus deleniti
                molestias quod vero laboriosam deserunt itaque, voluptatum
                labore nihil vitae repudiandae doloribus exercitationem at
                aliquam! Nesciunt voluptatum temporibus excepturi dolores
                incidunt laudantium odio debitis. Dicta totam sunt quo corrupti
                accusamus et animi ratione consequatur molestias explicabo hic
                eligendi necessitatibus laudantium, neque velit beatae magni.
                Nemo vero blanditiis illum numquam libero necessitatibus fugiat
                officiis repellendus. Optio, quis. Earum corporis vero debitis
                unde rerum quod fuga, modi culpa veniam quos, quisquam soluta ea
                voluptatum aliquam aperiam, vitae sint molestias? Cupiditate
                quibusdam repudiandae, sapiente distinctio nihil sunt.
                Aspernatur quas sapiente saepe quo autem ullam voluptatem
                deleniti dolorum fugit tenetur incidunt obcaecati suscipit
                adipisci in nulla quam ipsam enim facilis, corrupti alias rem?
                Velit voluptatum recusandae officiis modi. Minus molestiae
                consequatur assumenda reiciendis aperiam, eius iure repellendus.
                Vel fugiat fuga quasi eos adipisci rem, necessitatibus odit
                eius, quidem mollitia eum nesciunt officiis assumenda ab
                laudantium reprehenderit quia! Consequuntur? Porro, nostrum et
                dicta quo sint non sed officia voluptatem labore, laborum
                dolores quos dolorem corporis iusto libero vel voluptate aliquid
                obcaecati distinctio itaque optio, nihil magni temporibus.
                Error, temporibus? Dolor, non? Adipisci nesciunt deleniti beatae
                esse fugiat, quisquam minus eaque animi dolor aliquam aperiam.
                Consequatur tempora amet fugit praesentium iste culpa quo,
                quaerat perspiciatis deserunt quia nisi dolores ipsum? Nemo
                incidunt quae nulla inventore aliquam alias natus iure!
                Similique omnis enim esse praesentium est veniam dolor maxime.
                Reprehenderit molestias cumque fugit dignissimos sunt sequi
                enim. Adipisci beatae blanditiis dolores. Laudantium placeat,
                asperiores tenetur praesentium beatae dignissimos magni
                voluptate iusto dicta unde iste, ratione est sint eius fuga
                consequatur eligendi iure provident. Consequuntur nobis quaerat
                error est quos obcaecati exercitationem. Necessitatibus sunt
                praesentium reiciendis tempora maiores? Asperiores similique,
                natus sed quasi ut repudiandae aliquid deserunt tempore eligendi
                repellat hic iusto eveniet neque quisquam, nulla porro, eum
                magni repellendus minima eaque! Perspiciatis omnis odio
                architecto recusandae quaerat harum vel ducimus ullam. Officiis
                dolores sapiente nihil architecto veritatis quos provident
                necessitatibus! Nostrum fugiat nisi placeat aspernatur deleniti
                explicabo ab omnis odio. Ratione. Temporibus sunt nihil expedita
                corrupti reiciendis, asperiores nostrum amet quam, totam ut
                maiores magni saepe dolore at consectetur. Autem illum quos cum
                perferendis quia voluptatibus tempore beatae quidem accusantium
                temporibus. Magnam fugiat vero maiores, repellendus, ex quaerat
                esse sunt eum itaque nihil pariatur laborum expedita veniam
                dolorum reprehenderit nostrum accusantium autem! Consequatur
                animi, quam numquam pariatur et quia odit ad. Porro provident
                excepturi veniam exercitationem cumque deleniti aperiam!
                Laudantium fugit magni, accusantium velit ipsa nostrum minima
                temporibus distinctio cum minus quis voluptas expedita ad porro
                quam earum fugiat, suscipit eius! Culpa vitae dolores labore
                fugit necessitatibus similique ex ipsa? Dolorem earum quia
                debitis quod suscipit aut nesciunt, necessitatibus error laborum
                quasi nisi a cumque asperiores voluptate, expedita, officiis
                perspiciatis ex! Ipsam optio quo deserunt magni cupiditate
                exercitationem voluptas? Animi in asperiores quos minima a,
                deleniti, facere vel ratione aut recusandae est voluptate minus.
                Reiciendis eius doloremque magni, sit harum voluptatem?
                Consectetur ad cum, rerum itaque veniam laudantium eligendi ut
                tenetur mollitia nihil praesentium voluptatem, aspernatur,
                dolorem modi?
              </p>
            </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </TERipple>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Save changes
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
}
