import "./styles/homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="content111">
        <div className="cont11">
          <img
            src="http://preview.colorlib.com/theme/stories/images/bg_1.webp"
            alt=""
          />
        </div>
        <div className="cont12">
          <h3>Featured Posts</h3>
          <h1>Love the Delicious & Tasty Foods</h1>

          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia{" "}
          </p>
          <button>Read More</button>
        </div>
      </div>
      <h2>Recent Stories</h2>
      <div className="content112">
        <div className="data1">
          <div className="divi1">
            <div className="d1">
              <img
                src="https://preview.colorlib.com/theme/stories/images_1.jpg"
                alt=""
              />
              <span>Dessert</span>
              <span>March 01,2018</span>
              <h3>Tasty & Delicious Foods</h3>
              <a href="">Read More</a>
            </div>
            <div className="d2">
              <img
                src="https://preview.colorlib.com/theme/stories/images_5.jpg"
                alt=""
              />

              <span>Dessert</span>
              <span>March 01,2018</span>
              <h3>Tasty & Delicious Foods</h3>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="divi2">
            <div className="d3">
              <img
                src="https://preview.colorlib.com/theme/stories/images_3.jpg"
                alt=""
              />

              <span>Dessert</span>
              <span>March 01,2018</span>
              <h3>Tasty & Delicious Foods from Scotland</h3>
              <a href="">Read More</a>
            </div>

            <div className="d4">
              <img
                src="https://preview.colorlib.com/theme/stories/images_4.jpg"
                alt=""
              />

              <span>Dessert</span>
              <span>March 01,2018</span>
              <h3>Tasty & Delicious Foods </h3>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="divi3">
            <img
              src="https://preview.colorlib.com/theme/stories/images_2.jpg"
              alt=""
            />

            <span>Dessert</span>
            <span>March 01,2018</span>
            <h3>Tasty & Delicious Foods </h3>
            <a href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
