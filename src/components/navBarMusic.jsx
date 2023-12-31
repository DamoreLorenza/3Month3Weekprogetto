import { useSelector } from "react-redux"


const NavBarMusic=()=>{
const riproduzione= useSelector((state)=> state.stock)
    return(
        <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row h-100">
          <div className="col-lg-10 offset-lg-2">
            <div
              className="row h-100 flex-column justify-content-center align-items-center"
            >
              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex">

                  <span>
                    <img src="../assets/playerbuttons/shuffle.png" alt="shuffle" width={20} className="me-3 me-md-5 ms-md-3"/>
                  </span>
                  <span>
                    <img src="../assets/playerbuttons/prev.png" alt="prev" width={20} className="me-3 me-md-5"/>
                  </span>
                  <span>
                    <img src="../assets/playerbuttons/play.png" alt="play" width={20} className="me-3 me-md-5"/>
                  </span>
                  <span>
                    <img src="../assets/playerbuttons/next.png" alt="next" width={20} className="me-3 me-md-5"/>
                  </span>
                  <span>
                    <img src="../assets/playerbuttons/repeat.png" alt="repeat" width={20} className="me-3 me-md-5"/>
                  </span>
                </div>
                <div className="progress col-10 col-md-11 mt-3 mb-3" style={{height: 8}}>
                  <div role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}

export default NavBarMusic