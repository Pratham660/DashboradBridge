import "./Main.css";
import Chart from "./Chart";

const Main = () => {
  return (
    <main>
      <div className="main_container">
        <div className="main_title">
          {/* <img src={hello} alt="hello"/> */}
          <div className="main_greeting">
            <h1>Hello Bridge Admin!</h1>
            <p>Welcome to Dashboard</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number Of Visitors</p>
              <span className="font-bold text-title">13</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calender fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number Of Visitors</p>
              <span className="font-bold text-title">20</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-video-camera fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Jobs Posted</p>
              <span className="font-bold text-title">9</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-video-camera fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Unique Visitors</p>
              <span className="font-bold text-title">20</span>
            </div>
          </div>

          <div className="charts">
            <div className="charts_left">
              <div className="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Cupperino , Californis,USA</p>
                </div>
                <i className="fa fa-usd"></i>
              </div>
              <Chart />
            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>Cupertino, California, USA</p>
                </div>
                <i className="fa fa-use"></i>
              </div>

              <div className="charts__right__cards">
                <div className="card1">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>

                <div className="card2">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>

                <div className="card3">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>

                <div className="card4">
                  <h1>Income</h1>
                  <p>65748</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
