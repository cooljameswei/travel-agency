import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Header5 from "../../components/header/header-5";
import Hero5 from "../../components/hero/hero-5";
import Footer4 from "../../components/footer/footer-4";
import Locations from "../../components/home/home-5/Locations";
import CallToActions from "../../components/home/home-5/CallToActions";
import Blog from "../../components/blog/Blog3";
import Tours3 from "../../components/tours/Tours3";
import DiscountsBanner from "../../components/home/home-5/DiscountsBanner";
import Counter3 from "../../components/counter/Counter3";
import WhyChooseUs from "../../components/home/home-5/WhyChooseUs";
import FilterHotelsTabs from "../../components/hotels/filter-tabs/FilterHotelsTabs";
import FilterHotels from "../../components/hotels/FilterHotels";
import TestimonialLeftCol from "../../components/home/home-1/TestimonialLeftCol";
import Testimonial from "../../components/home/home-1/Testimonial";

const home_5 = () => {
  return (
    <>
      <Seo pageTitle="Home-5" />
      {/* End Page Title */}

      <Header5 />
      {/* End Header 5 */}

      <Hero5 />
      {/* End Hero 5 */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Explore Hot Locations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <a
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <Locations />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Explore Hot Locations */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Deals &amp; Discounts</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center ">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-tour-discounts-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev navigation */}
                <div className="col-auto">
                  <div className="pagination -dots text-border js-tour-discount-pagination" />
                </div>
                {/* End pagination */}
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-tour-discounts-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End .next navigation */}
              </div>
            </div>
            {/* End .col for swiper navigation and pagination */}
          </div>
          {/* End .col */}

          <div className="row y-gap-30 pt-40">
            <div className="col-xl-5">
              <DiscountsBanner />
            </div>
            {/* End col-xl-5 */}

            <div className="col-xl-7">
              <Tours3 />
            </div>
            {/* End col-xl-7 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Deals & Discounts */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <Counter3 />
          </div>
        </div>
      </section>
      {/* End counter up Section */}

      <section className="section-bg layout-pt-lg md:pt-0 md:pb-60 sm:pb-40 layout-pb-lg bg-blue-1-05">
        <WhyChooseUs />
      </section>
      {/* End whycosse Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Best Seller</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col-auto */}

            <div className="col-auto tabs -pills-2 ">
              <FilterHotelsTabs />
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}

          <div className="relative overflow-hidden pt-40 sm:pt-20">
            <div className="row y-gap-30">
              <FilterHotels />
            </div>
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* End Best Seller Hotels Sections */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>
            {/* End col */}

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <CallToActions />
      {/* End CallToActions */}

      <Footer4 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_5), { ssr: false });
