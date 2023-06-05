import React from "react";

const ParagraphsPage = () => {
  return (
    <div className="container my-12 mx-5">
      <h2
        className="mb-5 mt-0 text-3xl font-semibold leading-normal"
        id="basic"
        data-te-spy-item
      >
        Basic
      </h2>

      <p className="mb-3">
        Paragraphs are defined with the
        <code> &lt;p&gt;&lt;/p&gt; </code>
        tag. Paragraph tag is a very basic and typically the first tag you will
        need to publish your text on the web pages.
      </p>

      <p className="mb-4 mt-0 text-base font-light leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero
        iste quod quibusdam maxime recusandae odit eveniet, aspernatur culpa
        provident error molestiae vitae corporis in vero est! Beatae, ipsum
        voluptatibus.
      </p>

      <h2
        className="mb-5 mt-0 text-3xl font-semibold leading-normal"
        id="lead"
        data-te-spy-item
      >
        Lead
      </h2>

      <p className="mb-3">
        Make a paragraph stand out by adding <code>.text-xl</code>.
      </p>

      <p className="mb-4 mt-6 text-xl font-light leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero
        iste quod quibusdam maxime recusandae odit eveniet, aspernatur culpa
        provident error molestiae vitae corporis in vero est! Beatae, ipsum
        voluptatibus.
      </p>

      <h2
        className="mb-5 mt-0 text-3xl font-semibold leading-normal"
        id="quote"
        data-te-spy-item
      >
        Quote
      </h2>

      <p className="mb-3">
        Use a quotation on your website adding <code>.text-base</code>.
      </p>

      <p className="mb-0 mt-0 text-base font-light leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="mb-5 block text-neutral-600 dark:text-neutral-400">
        - Someone famous in <cite>Source Title</cite>
      </footer>

      <h2
        className="mb-5 mt-0 text-3xl font-semibold leading-normal"
        id="small"
        data-te-spy-item
      >
        Small
      </h2>

      <p className="mb-3">
        Use <code>.text-normal</code> class to make text small.
      </p>

      <small className="mb-5 mt-0 font-normal leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, libero
        iste quod quibusdam maxime recusandae odit eveniet, aspernatur culpa
        provident error molestiae vitae corporis in vero est! Beatae, ipsum
        voluptatibus.
      </small>

      <h2
        className="mb-5 mt-0 text-3xl font-semibold leading-normal"
        id="inline"
        data-te-spy-item
      >
        Inline text elements
      </h2>

      <p className="mb-3">Styling for common inline HTML5 elements.</p>

      <p>
        You can use the mark tag to
        <mark className="bg-primary-200">highlight</mark> text.
      </p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p>
        <s>This line of text is meant to be treated as no longer accurate.</s>
      </p>
      <p>
        <ins>
          This line of text is meant to be treated as an addition to the
          document.
        </ins>
      </p>
      <p>
        <u>This line of text will render as underlined.</u>
      </p>
      <p>
        <small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p>
        <strong>This line rendered as bold text.</strong>
      </p>
      <p>
        <em>This line rendered as italicized text.</em>
      </p>
    </div>
  );
};

export default ParagraphsPage;
