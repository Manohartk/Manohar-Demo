import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';
import { Link } from "react-router-dom";
class Scenes extends Component{
    constructor(props) {
      super(props)
    }
    componentDidMount() {
      $('li.add_elementhover').css("display","none");
      $('li.add_elementdoor').css("display","none");
      $( ".add_items" )
      .mouseover(function() {
        $('li.add_elementhover').css("display","block");
      })
      .mouseout(function() {
        $('li.add_elementhover').css("display","none");
      });
      $( ".add_items" )
      .mouseover(function() {
        $('li.add_elementdoor').css("display","block");
      })
      .mouseout(function() {
        $('li.add_elementdoor').css("display","none");
      });

    }

    render(){

    return(
      <div className="floorplan">
   <div className="container-fluid">
      <div className="row main-row">



        <div className="col-xs-12 main">

        <div className="floorplan_main_content">

          <ul className="nav nav-sidebar visibility_hidden">


            <li id="design_tab">
              <a href="#">
                Design
                <span className="glyphicon glyphicon-chevron-right pull-right"></span>
              </a>
            </li>
            <li id="items_tab">
              <a href="#">
                Add Items
                <span className="glyphicon glyphicon-chevron-right pull-right"></span>
              </a>
            </li>
          </ul>


          <div id="floorplanner">

            <canvas id="floorplanner-canvas"></canvas>

            <div id="floorplanner-controls">

              <div className="customized__floorplan">
                <Link to="/"><button>Back</button></Link>
                  <h1>Customize your Floor Plan</h1>
                  <p>Each kitchen is unique and so are their requirements. We at magicwoods have listed down the top most popular kitchen sizes which tend to match to resedential kitches, Choose your kitchen shape to step into 2D view of your kitchen.</p>
              </div>


            </div>

            <div id="draw-walls-hint">
              Press the "Esc" key to stop drawing walls
            </div>



            <div className="rightside__changebtn">

              <ul>

                  <li>
                    <div className="ceiling__height">
                      <span className="height_txt">CEILING HEIGHT</span>
                      <div className="box">
    <p>
      <input type="text" id="size" className="sizes form-control " value="" disabled placeholder="9' 6&quot;" />
      <input id="numbersHeight" className="numbers" value="114" hidden="hidden" />
    </p>
  </div>
                    </div>
                  </li>



                  <li>
                    <div className="change_lay layout_sec" id="update-floorplan">
                      <img src="rooms/svg/icon-3dview.svg" alt="3D View" />
                      <span>3D View</span>
                    </div>
                  </li>
                  <li className="add_items">
                  <div className="add_elements layout_sec">
                      <img src="rooms/svg/icon-addelement.svg" alt="Custom Design"/>
                      <span>Add Elements</span>

                    </div>

                  <ul>
                  <li className="add_elementhover layout_sec">
                  <div class="add_window_link">
                    <svg version="1.1" id="Layer_1"  x="0px" y="0px"
	 width="21.5px" height="22px" viewBox="0 0 21.5 22" enable-background="new 0 0 21.5 22" >
<g>
	<rect x="5.11" y="5.028"  width="15.807" height="14.368"/>
	<path fill="#FFFFFF" d="M4.678,21.835c0.11,0,0.218-0.045,0.296-0.123s0.123-0.186,0.123-0.296s-0.045-0.218-0.123-0.296
		s-0.186-0.123-0.296-0.123S4.46,21.042,4.382,21.12s-0.123,0.186-0.123,0.296s0.045,0.218,0.123,0.296
		C4.459,21.79,4.568,21.835,4.678,21.835z"/>
	<path fill="#FFFFFF" d="M6.588,7.041c-0.11,0-0.218,0.045-0.297,0.123C6.213,7.242,6.169,7.35,6.169,7.46s0.044,0.218,0.122,0.297
		c0.078,0.078,0.186,0.122,0.297,0.122c0.11,0,0.218-0.044,0.296-0.122C6.962,7.678,7.007,7.57,7.007,7.46S6.962,7.242,6.884,7.164
		C6.806,7.086,6.698,7.041,6.588,7.041z"/>
	<path fill="#FFFFFF" d="M5.134,8.321l-3.733,3.733c-0.164,0.164-0.164,0.429,0,0.592c0.082,0.082,0.189,0.123,0.296,0.123
		s0.214-0.041,0.296-0.123l3.733-3.733c0.164-0.164,0.164-0.429,0-0.592C5.563,8.158,5.298,8.158,5.134,8.321z"/>
	<path fill="#FFFFFF" d="M19.785,20.14l-0.008,0.004l0,0h1.257c0.231,0,0.419-0.188,0.419-0.419V3.137c0,0,0.004-0.008,0.042-0.011
		V0.791c-0.038-0.231-0.226-0.419-0.457-0.419h-8.169c-0.231,0-0.419,0.188-0.419,0.419s0.419,0.419,0.419,0.419h7.746v1.508H0.843
		V1.21h7.888c0.21,0,0.398-0.149,0.427-0.357c0.037-0.259-0.163-0.481-0.414-0.481h-8.32c-0.231,0-0.419,0.188-0.419,0.419v2.346
		v16.587c0,0.231,0.188,0.419,0.419,0.419 M14.586,20.982H5.889c-0.018,0-0.035,0.007-0.048,0.019
		C5.45,21.367,5.703,21.82,6.063,21.82h15.144c0.018,0,0.035-0.007,0.048-0.019c0.391-0.366,0.138-0.819-0.222-0.819 M0.843,18.255
		l7.795-7.796c0.148-0.148,0.176-0.386,0.05-0.554c-0.157-0.21-0.455-0.226-0.633-0.048L0.843,17.07V3.556h9.467v15.75H0.843V18.255
		z M20.413,11.139c0.006-0.01,0.012-0.023,0.017-0.033 M14.583,19.264l-3.43,0.042h-0.004V3.556h9.467v15.75h-0.838 M18.866,20.982
		h-3.372"/>
	<path fill="#FFFFFF" d="M10.95,0.165c-0.11,0-0.218,0.045-0.296,0.123s-0.123,0.186-0.123,0.296s0.044,0.218,0.123,0.296
		c0.078,0.078,0.186,0.123,0.296,0.123s0.218-0.045,0.296-0.123c0.078-0.078,0.123-0.186,0.123-0.296s-0.045-0.218-0.123-0.296
		C11.168,0.21,11.06,0.165,10.95,0.165z"/>
</g>
</svg>

                      <span>Add Window</span>
                      </div>
                  </li>
                  <li className="add_elementdoor layout_sec">
                  <div class="add_door_link">
                    <svg version="1.1" id="Layer_1" x="0px" y="0px"
	 width="15px" height="23px" viewBox="0 0 15 23" enable-background="new 0 0 15 23">
<g>
	<rect x="4.439" y="3.923" width="10.012" height="17.084"/>
	<g>
		<path fill="#010101" d="M14.316,21.587H0.684c-0.281,0-0.508-0.192-0.508-0.428V0.506c0-0.237,0.228-0.428,0.508-0.428h13.632
			c0.281,0,0.508,0.192,0.508,0.428v20.653C14.825,21.395,14.597,21.587,14.316,21.587z M1.192,20.73h12.615V0.934H1.192V20.73z"/>
		<path fill="#010101" d="M6.331,11.177H2.975c-0.281,0-0.508-0.192-0.508-0.428V2.477c0-0.237,0.228-0.428,0.508-0.428h3.356
			c0.281,0,0.508,0.192,0.508,0.428v8.272C6.839,10.985,6.611,11.177,6.331,11.177z M3.483,10.32h2.339V2.905H3.483V10.32z"/>
		<path fill="#010101" d="M12.025,11.177H8.669c-0.281,0-0.508-0.192-0.508-0.428V2.477c0-0.237,0.228-0.428,0.508-0.428h3.356
			c0.281,0,0.508,0.192,0.508,0.428v8.272C12.534,10.985,12.306,11.177,12.025,11.177z M9.178,10.32h2.339V2.905H9.178L9.178,10.32z
			"/>
		<path fill="#010101" d="M3.407,14.176c-0.715,0-1.297-0.49-1.297-1.093c0-0.602,0.582-1.093,1.297-1.093s1.297,0.49,1.297,1.093
			C4.703,13.686,4.122,14.176,3.407,14.176z M3.407,12.848c-0.154,0-0.28,0.106-0.28,0.236c0,0.13,0.125,0.236,0.28,0.236
			c0.154,0,0.28-0.106,0.28-0.236C3.687,12.954,3.561,12.848,3.407,12.848z"/>
		<path fill="#010101" d="M12.025,19.918c-0.281,0-0.508-0.192-0.508-0.428v-3.428c0-0.237,0.228-0.428,0.508-0.428
			c0.281,0,0.508,0.192,0.508,0.428v3.428C12.534,19.726,12.306,19.918,12.025,19.918z"/>
		<path fill="#010101" d="M12.025,15.162c-0.281,0-0.508-0.192-0.508-0.428v-0.214c0-0.237,0.228-0.428,0.508-0.428
			c0.281,0,0.508,0.192,0.508,0.428v0.214C12.534,14.97,12.306,15.162,12.025,15.162z"/>
	</g>
	<path fill="#010101" d="M7.809,22.083h-0.52c-0.018,0-0.036,0.007-0.049,0.019c-0.392,0.367-0.138,0.821,0.222,0.821h6.98
		c0.018,0,0.036-0.007,0.049-0.019c0.392-0.367,0.138-0.821-0.222-0.821"/>
	<path fill="#010101" d="M6.019,22.076c-0.11,0-0.219,0.045-0.297,0.123C5.644,22.277,5.6,22.386,5.6,22.496
		s0.044,0.219,0.123,0.297c0.078,0.078,0.186,0.123,0.297,0.123c0.11,0,0.219-0.045,0.297-0.123
		c0.078-0.078,0.123-0.186,0.123-0.297s-0.045-0.219-0.123-0.297C6.238,22.121,6.13,22.076,6.019,22.076z"/>
</g>
</svg>
                      <span>Add Door</span>
                      </div>
                  </li>
                  </ul>
                  </li>
              </ul>

            </div>



          </div>



          <div id="viewer">
            <div id="main-controls">
              <a href="#" className="btn btn-default btn-sm" id="new">
                New Plan
              </a>
              <a href="#" className="btn btn-default btn-sm" id="saveFile">
                Save Plan
              </a>
              <a href="#" className="btn btn-default btn-sm" id="floorplan_tab">
                Back to Floorplan
              </a>

            </div>
            <div id="camera-controls">
              <a href="#" className="btn btn-default bottom" id="zoom-out">
                <span className="glyphicon glyphicon-zoom-out"></span>
              </a>
              <a href="#" className="btn btn-default bottom" id="reset-view">
                <span className="glyphicon glyphicon glyphicon-home"></span>
              </a>
              <a href="#" className="btn btn-default bottom" id="zoom-in">
                <span className="glyphicon glyphicon-zoom-in"></span>
              </a>
              <span>&nbsp;</span>
              <a className="btn btn-default bottom" href="#" id="move-left" >
                <span className="glyphicon glyphicon-arrow-left"></span>
              </a>
              <span className="btn-group-vertical">
                <a className="btn btn-default" href="#" id="move-up">
                  <span className="glyphicon glyphicon-arrow-up"></span>
                </a>
                <a className="btn btn-default" href="#" id="move-down">
                  <span className="glyphicon glyphicon-arrow-down"></span>
                </a>
              </span>
              <a className="btn btn-default bottom" href="#" id="move-right" >
                <span className="glyphicon glyphicon-arrow-right"></span>
              </a>
            </div>

            <div id="loading-modal">
              <h1>Loading...</h1>
            </div>
          </div>


          <div id="add-items">
            <div className="row what_i_have_to_do" id="items-wrapper">

            </div>
          </div>

        </div>

        </div>

      </div>
    </div>


    </div>
    )
  }

}

export default Scenes;
