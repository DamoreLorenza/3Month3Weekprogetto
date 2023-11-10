import { Link } from "react-router-dom"

const Main =()=>{
return(

    <>
    <div className="col-9 col-md-9 offset-md-3 mainPage mt-4">
    <div className="row">
      <div className="col-9  mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </div>
    </div>
    <div className="row">
      <div className="">
        <div id="searchResults" >
          <h2>Search Results</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
          ></div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="">
        <div id="rock" className=" d-flex justify-content-start">
          <h2>Rock classics</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="rockSection"
          ></div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="">
        <div id="pop" className=" d-flex justify-content-start">
          {/* <Link to='/music'> */}
          <h2 className="text-white" >Pop Culture</h2>
          {/* </Link> */}
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="popSection"
          ></div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="">
        <div id="hiphop" className=" d-flex justify-content-start">
          <h2>#HipHop</h2>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="hipHopSection"
          ></div>
        </div>
      </div>
    </div>
  </div>

</>
)

}

export default Main