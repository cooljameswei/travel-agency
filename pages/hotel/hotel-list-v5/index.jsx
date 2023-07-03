import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import DefaultFooter from "../../../components/footer/default";
import Pagination from "../../../components/hotel-list/common/Pagination";
import HotelProperties from "../../../components/hotel-list/hotel-list-v5/HotelProperties";
import DropdownSelelctBar from "../../../components/hotel-list/common/DropdownSelelctBar";
import GuestSearch from "../../../components/hero/hero-5/GuestSearch";
import LocationSearch from "../../../components/hero/hero-5/LocationSearch";

const index = () => {
  return (
    <>
      <Seo pageTitle="Hotel List v5" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="section-bg pt-40 pb-40 relative z-5">
        <div className="section-bg__item col-12">
          <img
            src="/img/misc/bg-1.png"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* End .section-bg__item */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 fw-600 text-white">
                  Find Your Dream Luxury Location
                </h1>
              </div>
              {/* End text-center */}
              <div className="tabs__content js-tabs-content">
                <div className="mainSearch bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4">
                  <div className="button-grid items-center">
                    <LocationSearch />
                    {/* End Location */}

                    <GuestSearch />
                    {/* End guest */}

                    <div className="button-item">
                      <button
                        className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
                        onClick={() => Router.push("/destinations")}
                      >
                        <i className="icon-search text-20 mr-10" />
                        Search
                      </button>
                    </div>
                    {/* End search button_item */}
                  </div>
                </div>
                {/* End .mainSearch */}
              </div>
              {/* End serarchbox tab-content */}
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="row x-gap-20 y-gap-10 items-center">
                <div className="col-auto">
                  <div className="text-18 fw-500">Filter</div>
                </div>
                {/* End .col-auto */}

                <div className="col-auto">
                  <div className="row x-gap-15 y-gap-15">
                    <DropdownSelelctBar />
                  </div>
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
            </div>
            {/* End col-auto */}

            <div className="col-auto">
              <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                <i className="icon-up-down text-14"></i>
              </button>
            </div>
            {/* End col-auto */}

            <div className="border-top-light mt-30 mb-30"></div>
            {/* End border-top */}

            <div className="row y-gap-30">
              <HotelProperties />
            </div>
            {/* End .row */}
            <Pagination />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
