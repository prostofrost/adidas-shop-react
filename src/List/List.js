import React from 'react';
import filtericon from './filter.svg';
import shoes from './shoes-1.jpg';

export default () => {
  return (
    <section className="wrapper">
      <div className="product-list">
        <div className="filter filter-m">
          <button className="filter-switch">
            <IconFilter />
          </button>

          <div className="filter-gender filter-gender-m">
            <button className="active">Man</button>
            <button>Woman</button>
          </div>
          <div className="filter-size">
            <div className="filter-size-label">Size</div>
            <button>36</button>
            <button>37</button>
            <button>38</button>
            <button>39</button>
            <button>40</button>
            <button className="active">41</button>
            <button>42</button>
          </div>
        </div>
        <hr className="separator" />
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="product-card product-card-sale">
              <img src={shoes} alt="" />
              <a href="/product-page.html" className="product-card-price">
                $170
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="product-card product-card-sale">
              <img src={shoes} alt="" />
              <a href="/product-page.html" className="product-card-price">
                $230
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="product-card">
              <img src={shoes} alt="" />
              <a href="/product-page.html" className="product-card-price">
                $190
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="product-card">
              <img src={shoes} alt="" />
              <a href="/product-page.html" className="product-card-price">
                $190
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="product-card">
              <img src={shoes} alt="" />
              <a href="/product-page.html" className="product-card-price">
                $190
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="product-card">
              <img src={shoes} alt="" />
              <a href="/product-page.html" className="product-card-price">
                $190
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icon
const IconFilter = React.createClass({
  render() {
    return (
      <svg
        className="i-filter"
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="100"
        viewBox="0 0 120.3 100.3"
        aria-labelledby="title"
      >
        <title id="title">Filter</title>
        <path d="M119.3 1c-14.9 18-29.8 35.9-44.6 53.9-1.1 1.4-1.6 3.6-1.7 5.5-.2 6.5.2 15-.1 21.5V83c-7.5 4.9-16.8 10.7-25.3 16v-6.6c0-10.5.1-21 0-31.5 0-2-.5-4.5-1.7-6C31.1 36.9 16.2 19 1.3 1h118z" />
      </svg>
    );
  }
});
