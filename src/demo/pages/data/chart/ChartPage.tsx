import React from "react";
import ChartBar from "./examples/ChartBar";
import ChartLine from "./examples/ChartLine";
import ChartBarHorizontal from "./examples/ChartBarHorizontal";
import ChartPie from "./examples/ChartPie";
import ChartDoughnut from "./examples/ChartDoughnut";
import ChartPolar from "./examples/ChartPolar";
import ChartRadar from "./examples/ChartRadar";
import ChartBubble from "./examples/ChartBubble";
import ChartScatter from "./examples/ChartScatter";
import ChartBarCustomOptions from "./examples/ChartBarCustomOptions";
import ChartBarCustomTootlip from "./examples/ChartBarCustomTooltip";
import ChartBarDarkModeProps from "./examples/ChartBarDarkModeProps";
import ChartBarDarkModeOptions from "./examples/ChartBarDarkModeDarkOptions";

const ChartPage = () => {
  return (
    <div className="container my-12 mx-5">
      {/* <!-- Section: Bar chart --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="bar"
          data-te-spy-item
        >
          Bar chart
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          A bar chart provides a way of showing data values represented as bars.
        </p>

        <ChartBar />
      </section>
      {/* <!-- Section: Bar chart --> */}

      {/* <!-- Section: Line chart --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="line"
          data-te-spy-item
        >
          Line chart
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          To use our minimalistic line chart, set the <code>type</code> option
          to <code>line</code>.
        </p>

        <ChartLine />
      </section>
      {/* <!-- Section: Line chart --> */}

      {/* <!-- Section: Bar chart horizontal --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="bar-horizontal"
          data-te-spy-item
        >
          Bar chart horizontal
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Change the orientation of your bar chart from vertical to horizontal
          by setting the <code>indexAxis</code> option to <code>'y'</code>.
        </p>

        <ChartBarHorizontal />
      </section>
      {/* <!-- Section: Bar chart horizontal --> */}

      {/* <!-- Section: Pie chart --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="pie"
          data-te-spy-item
        >
          Pie chart
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          A chart with the type <code>pie</code> splits the circle into several
          pieces to represent a dataset's values as an area's percentage.
        </p>

        <ChartPie />
      </section>
      {/* <!-- Section: Pie chart --> */}

      {/* <!-- Section: Doughnut chart --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="doughnut"
          data-te-spy-item
        >
          Doughnut chart
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Another type of graph representing data as an area's percentage is a
          doughnut chart.
        </p>

        <ChartDoughnut />
      </section>
      {/* <!-- Section: Doughnut chart --> */}

      {/* <!-- Section: Polar chart --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="polar"
          data-te-spy-item
        >
          Polar chart
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Polar area graph will split the circle into pieces with equal angles
          and different radius.
        </p>

        <ChartPolar />
      </section>
      {/* <!-- Section: Polar chart --> */}

      {/* <!-- Section: Radar chart --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="radar"
          data-te-spy-item
        >
          Radar chart
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          This type of chart will enclose the area based on a dataset's values.
        </p>

        <ChartRadar />
      </section>
      {/* <!-- Section: Radar chart --> */}

      {/* <!-- Section: Bubble chart --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="bubble"
          data-te-spy-item
        >
          Bubble chart
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          This graph visualizes data in a series of "bubbles" with customized
          coordinates and radius.
        </p>

        <ChartBubble />
      </section>
      {/* <!-- Section: Bubble chart --> */}

      {/* <!-- Section: Scatter chart --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="scatter"
          data-te-spy-item
        >
          Scatter chart
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Use this chart to represent your data as a series of points with x and
          y coordinates.
        </p>

        <ChartScatter />
      </section>
      {/* <!-- Section: Scatter chart --> */}

      {/* <!-- Section: Bar chart with custom options  --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="custom-options"
          data-te-spy-item
        >
          Bar chart with custom options
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          TE React provides default options for each chart - you can easily
          change that by passing an object with your custom options to the Chart
          constructor.
        </p>

        <ChartBarCustomOptions />
      </section>
      {/* <!-- Section: Bar chart with custom options --> */}

      {/* <!-- Section: Bar chart with custom tootlip  --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="custom-tootlip"
          data-te-spy-item
        >
          Bar chart with custom tootlip
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Set custom text format inside a tooltip by using <code>plugins</code>{" "}
          option.
        </p>

        <ChartBarCustomTootlip />
      </section>
      {/* <!-- Section: Bar chart with custom tootlip --> */}

      {/* <!-- Section: Bar chart with darkmode customization  --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="darkmode-props"
          data-te-spy-item
        >
          Bar chart with darkmode customization
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          You can change some of the dark mode colors with the following props:
        </p>
        <ul className="mb-1 list-disc">
          <li className="ml-8">
            <code>darkTicksColor</code> - change darkmode ticks color from white
            to other (string)
          </li>
          <li className="ml-8">
            <code>darkLabelColor</code> - change darkmode label color from white
            to other (string)
          </li>
          <li className="ml-8">
            <code>darkGridLinesColor</code> - change darkmode grid lines color
            from <code>#555</code> to other (string)
          </li>
          <li className="ml-8">
            <code>darkBgColor</code> - change darkmode background color from
            <code> #262626</code> to the one you are using (string). Use with
            radial charts
          </li>
          <li className="ml-8">
            <code>disableDarkMode</code> - removes darkmode color change
          </li>
          <li className="ml-8">
            <code>darkMode</code> - allows to change the dark mode on init
          </li>
        </ul>

        <ChartBarDarkModeProps />
      </section>
      {/* <!-- Section: Bar chart with darkmode customization --> */}

      {/* <!-- Section: Bar chart with darkmode customization (with darkOptions property)  --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="darkmode-darkOptions"
          data-te-spy-item
        >
          Bar chart with darkmode customization (with <code>darkOptions</code>{" "}
          property)
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          You can change dark mode configuration using <code>darkOptions</code>{" "}
          property.
        </p>

        <ChartBarDarkModeOptions />
      </section>
      {/* <!-- Section: Bar chart with darkmode customization (with darkOptions property) --> */}
    </div>
  );
};

export default ChartPage;
