import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { Link } from "react-router-dom";
import ReactPlanner from "../react-planner";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 405,
  },
  media: {
    height: 100,
  }
}));

export default function SelectPage() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
       <div className="selectroom">
    <Grid container spacing={3}>
    <Grid item xs={12} md={6} className="shapepage">
        <Paper className={classes.paper}>
        <div className="innerlogo">
          <Link to="/"><a href="#"><img src="logo-white.png" className="innerlogo" alt=""/></a></Link></div>
          <div className="select">
          <h2>Select the room shape that resembles your space</h2>
          <hr className="selectpage"></hr>
          <p className="contshape">Each kitchen unique and so are their requirements. We at magickwoods have listed down the top most popular kitchhen sizes which tend to match to residential kitchen.Choose your kitchen to step into a 2D view of your kitchen.</p>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6} className="secshape">

      <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <div className="shapes">
            <svg version="1.1" id="Layer_1" x="0px" y="0px"
	 width="192px" height="41px" viewBox="0 0 192 41" enable-background="new 0 0 192 41">
<g>
	<rect x="0.095" y="-0.879" display="none" fill="#FFFFFF" width="191.822" height="6.311"/>
	<rect x="0.083" y="7.798" fill="#fff" width="191.417" height="32.038"/>
	<g>
		<rect x="0.618" y="0.246" fill="none" stroke="#676567" stroke-miterlimit="10" width="190.627" height="7.295"/>
		<path fill="none" stroke="#676567" stroke-miterlimit="10" d="M191.371,2.614l-6.849,5.302 M189.497,0.208l-9.953,7.708
			 M184.517,0.208l-9.955,7.708 M179.538,0.208l-9.955,7.708 M174.558,0.208l-9.955,7.708 M169.578,0.208l-9.954,7.708
			 M164.595,0.208l-9.95,7.708 M159.618,0.208l-9.955,7.708 M154.637,0.208l-9.955,7.708 M149.659,0.208l-9.956,7.708
			 M144.678,0.208l-9.952,7.708 M139.698,0.208l-9.954,7.708 M134.719,0.208l-9.959,7.708 M129.738,0.208l-9.953,7.708
			 M124.755,0.208l-9.954,7.708 M119.775,0.208l-9.952,7.708 M114.799,0.208l-9.958,7.708 M109.817,0.208l-9.951,7.708
			 M104.837,0.208l-9.954,7.708 M99.856,0.208l-9.955,7.708 M94.88,0.208l-9.958,7.708 M89.898,0.208l-9.957,7.708 M84.916,0.208
			l-9.954,7.708 M79.937,0.208l-9.955,7.708 M74.955,0.208l-9.952,7.708 M69.977,0.208l-9.956,7.708 M64.996,0.208l-9.953,7.708
			 M60.018,0.208l-9.956,7.708 M55.036,0.208l-9.954,7.708 M50.057,0.208l-9.955,7.708 M45.077,0.208l-9.954,7.708 M40.097,0.208
			l-9.954,7.708 M35.117,0.208l-9.954,7.708 M30.137,0.208l-9.953,7.708 M25.157,0.208l-9.955,7.708 M20.178,0.208l-9.955,7.708
			 M15.199,0.208L5.24,7.915 M5.237,0.208L0.528,3.854 M10.218,0.208L0.26,7.915"/>

			<rect x="0.618" y="8.063" fill="none" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" width="190.627" height="31.966"/>
	</g>
</g>
</svg>
          <p className="shapename">Straight</p>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
          <div className="shapes">
          <svg version="1.1" id="Layer_1" x="0px" y="0px"
	 width="154px" height="155px" viewBox="0 0 154 155" enable-background="new 0 0 154 155" >
<g>
	<rect x="1.736" y="1.137" fill="#FFFFFF" width="151.01" height="8.884"/>
	<rect x="1.736" y="1.137" fill="none" stroke="#676567" stroke-miterlimit="10" width="151.01" height="8.884"/>
	<path fill="none" stroke="#676567" stroke-miterlimit="10" d="M152.425,3.649l-5.418,6.262 M150.942,0.813l-7.867,9.099
		 M147.003,0.813l-7.863,9.099 M143.068,0.813l-7.866,9.099 M139.133,0.813l-7.866,9.099 M135.199,0.813l-7.867,9.099
		 M131.259,0.813l-7.867,9.099 M127.329,0.813l-7.87,9.099 M123.388,0.813l-7.863,9.099 M119.457,0.813l-7.872,9.099 M115.517,0.813
		l-7.867,9.099 M111.581,0.813l-7.867,9.099 M107.646,0.813l-7.867,9.099 M103.712,0.813l-7.871,9.099 M99.772,0.813l-7.866,9.099
		 M95.837,0.813L87.97,9.911 M91.9,0.813l-7.866,9.099 M87.966,0.813l-7.868,9.099 M84.028,0.813l-7.864,9.099 M80.095,0.813
		l-7.869,9.099 M76.158,0.813l-7.865,9.099 M72.223,0.813l-7.869,9.099 M68.287,0.813l-7.867,9.099 M64.349,0.813l-7.863,9.099
		 M60.415,0.813l-7.868,9.099 M56.479,0.813l-7.868,9.099 M52.542,0.813l-7.867,9.099 M48.606,0.813l-7.87,9.099 M44.673,0.813
		l-7.87,9.099 M40.734,0.813l-7.865,9.099 M36.799,0.813l-7.868,9.099 M32.866,0.813l-7.87,9.099 M28.925,0.813L21.06,9.911
		 M24.99,0.813l-7.865,9.099 M21.056,0.813l-7.867,9.099 M17.117,0.813L9.25,9.911 M13.185,0.813l-7.87,9.099 M5.312,0.813
		L1.589,5.116 M9.248,0.813L1.38,9.911"/>
	<rect x="1.039" y="1.221" fill="#FFFFFF" width="7.223" height="152.637"/>
	<rect x="0.822" y="1.185" fill="none" stroke="#676567" stroke-miterlimit="10" width="7.225" height="152.637"/>
	<path fill="none" stroke="#676567" stroke-miterlimit="10" d="M2.846,0.953l5.135,5.493 M0.525,2.457l7.456,7.98 M0.525,6.451
		l7.456,7.982 M0.525,10.446l7.456,7.98 M0.525,14.44l7.456,7.975 M0.525,18.43l7.456,7.98 M0.525,22.425l7.456,7.976 M0.525,26.414
		l7.456,7.983 M0.525,30.411l7.456,7.983 M0.525,34.401l7.456,7.981 M0.525,38.395l7.456,7.978 M0.525,42.385l7.456,7.985
		 M0.525,46.382l7.456,7.982 M0.525,50.372l7.456,7.983 M0.525,54.367l7.456,7.979 M0.525,58.356l7.456,7.983 M0.525,62.355
		l7.456,7.977 M0.525,66.348l7.456,7.977 M0.525,70.34l7.456,7.977 M0.525,74.331l7.456,7.981 M0.525,78.324l7.456,7.979
		 M0.525,82.317l7.456,7.978 M0.525,86.309l7.456,7.981 M0.525,90.302l7.456,7.984 M0.525,94.293l7.456,7.984 M0.525,98.289
		l7.456,7.982 M0.525,102.285l7.456,7.976 M0.525,106.273l7.456,7.982 M0.525,110.263l7.456,7.984 M0.525,114.26l7.456,7.981
		 M0.525,118.253l7.456,7.978 M0.525,122.246l7.456,7.98 M0.525,126.241l7.456,7.979 M0.525,130.235l7.456,7.978 M0.525,134.225
		l7.456,7.98 M0.525,138.22l7.456,7.977 M0.525,142.21l7.456,7.984 M0.525,150.195l3.527,3.776 M0.525,146.204l7.456,7.983"/>
	<polygon fill="#fff" points="126.353,11.07 126.353,11.07 9.341,11.07 9.341,59.573 9.411,59.573 9.411,153.85 36.78,153.85
		36.78,36.592 126.353,36.592 126.353,153.808 153.475,153.808 153.475,11.07 	"/>
	<polygon fill="none" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" points="126.353,11.07 126.237,11.07 9.341,11.397
		9.341,40.978 9.411,40.978 9.411,153.784 37.929,153.784 37.929,36.381 125.205,36.381 125.205,153.734 153.475,153.734
		153.475,11.07 	"/>
</g>
</svg>
          <p className="shapename">u - shape</p>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
          <div className="shapes">
          <Link onClick={()=>{window.location.href = '/react-planner';}}><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="152px" height="151px" viewBox="0 0 152 151" enable-background="new 0 0 152 151">

<g>
	<rect x="1.211" y="0.165" fill="#FFFFFF" width="149.795" height="9.935"/>

		<rect x="1.211" y="0.165" fill="none" stroke="#676567" stroke-width="0.587" stroke-miterlimit="10" width="149.795" height="9.935"/>
	<path fill="none" stroke="#676567" stroke-width="0.587" stroke-miterlimit="10" d="M151.04,3.067l-5.377,6.767 M149.566,0
		l-7.814,9.833 M145.658,0l-7.813,9.833 M141.75,0l-7.814,9.833 M137.841,0l-7.809,9.833 M133.933,0l-7.813,9.833 M130.024,0
		l-7.813,9.833 M126.115,0l-7.809,9.833 M122.211,0l-7.814,9.833 M118.303,0l-7.815,9.833 M114.394,0l-7.813,9.833 M110.485,0
		l-7.814,9.833 M106.572,0l-7.814,9.833 M102.664,0l-7.811,9.833 M98.754,0l-7.813,9.833 M94.847,0l-7.813,9.833 M90.938,0
		l-7.81,9.833 M87.029,0l-7.813,9.833 M83.122,0l-7.813,9.833 M79.216,0l-7.812,9.833 M75.309,0l-7.813,9.833 M71.4,0l-7.813,9.833
		 M67.492,0l-7.814,9.833 M63.584,0L55.77,9.833 M59.673,0L51.86,9.833 M55.766,0l-7.813,9.833 M51.857,0l-7.814,9.833 M47.949,0
		l-7.813,9.833 M44.04,0l-7.813,9.833 M40.127,0l-7.813,9.833 M36.219,0l-7.813,9.833 M32.311,0l-7.81,9.833 M28.406,0l-7.813,9.833
		 M24.497,0l-7.813,9.833 M20.589,0l-7.813,9.833 M16.68,0L8.865,9.833 M12.773,0L4.958,9.833 M4.954,0L1.258,4.652 M8.861,0
		L1.049,9.833"/>
	<rect x="0.16" y="0.209" fill="#FFFFFF" width="9.939" height="149.795"/>

		<rect x="0.16" y="0.209" fill="none" stroke="#676567" stroke-width="0.587" stroke-miterlimit="10" width="9.939" height="149.795"/>
	<path fill="none" stroke="#676567" stroke-width="0.587" stroke-miterlimit="10" d="M3.065,0.174l6.764,5.377 M0,1.649l9.829,7.814
		 M0,5.557l9.829,7.812 M0,9.466l9.829,7.812 M0,13.373l9.829,7.811 M0,17.282l9.829,7.813 M0,21.191l9.829,7.811 M0,25.098
		l9.829,7.811 M0,29.004l9.829,7.814 M0,32.913l9.829,7.813 M0,36.822l9.829,7.811 M0,40.729l9.829,7.814 M0,44.639l9.829,7.814
		 M0,48.547l9.829,7.812 M0,52.457l9.829,7.813 M0,56.365l9.829,7.813 M0,60.273l9.829,7.811 M0,64.182l9.829,7.813 M0,68.089
		l9.829,7.813 M0,71.997l9.829,7.815 M0,75.905l9.829,7.815 M0,79.816l9.829,7.811 M0,83.725l9.829,7.811 M0,87.633l9.829,7.814
		 M0,91.541l9.829,7.811 M0,95.45l9.829,7.812 M0,99.358l9.829,7.814 M0,103.268l9.829,7.81 M0,107.176l9.829,7.811 M0,111.085
		l9.829,7.813 M0,114.993l9.829,7.812 M0,118.901l9.829,7.811 M0,122.807l9.829,7.811 M0,126.715l9.829,7.812 M0,130.625
		l9.829,7.812 M0,134.532l9.829,7.814 M0,138.441l9.829,7.815 M0,146.259l4.648,3.696 M0,142.352l9.829,7.812"/>
	<polygon fill="#FFFFFF" points="151.006,10.145 10.302,10.145 10.302,39.191 10.392,39.191 10.392,149.966 39.089,149.966
		39.089,39.191 151.006,39.191 	"/>
	<polygon fill="#fff" stroke="#241F20" stroke-width="2" class="svghover" stroke-miterlimit="10" points="151.006,10.145 10.302,10.145
		10.302,39.191 10.392,39.191 10.392,149.966 39.089,149.966 39.089,39.191 151.006,39.191 	"/>
</g>
</svg>
          <p className="shapename">l - shape</p></Link>
          </div>
          </Paper>
        </Grid>

     </Grid>
     <div className="shapesec">
     <Grid container spacing={4}>
     <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <div className="shapes">
          <svg version="1.1" id="Layer_1"  x="0px" y="0px"
	 width="175px" height="151px" viewBox="0 0 175 151" enable-background="new 0 0 175 151">
<g>
	<g>
		<g>
			<rect x="0.388" y="9.127" fill="#fff" width="174.367" height="31.961"/>
			<rect x="36.438" y="74.808" fill="#fff" width="104.26" height="44.258"/>
			<g>

					<rect x="0.388" y="0.858" fill="none" stroke="#676567" stroke-width="0.77" stroke-miterlimit="10" width="174.367" height="8.716"/>
				<path fill="none" stroke="#676567" stroke-width="0.77" stroke-miterlimit="10" d="M174.861,3.392L168.6,9.356 M173.146,0.69
					l-9.102,8.665 M168.589,0.69l-9.097,8.665 M164.038,0.69l-9.1,8.665 M159.488,0.69l-9.103,8.665 M154.93,0.69l-9.097,8.665
					 M150.38,0.69l-9.101,8.665 M145.827,0.69l-9.101,8.665 M141.272,0.69l-9.1,8.665 M136.722,0.69l-9.1,8.665 M132.168,0.69
					l-9.102,8.665 M127.614,0.69l-9.1,8.665 M123.062,0.69l-9.098,8.665 M118.51,0.69l-9.102,8.665 M113.958,0.69l-9.101,8.665
					 M109.403,0.69l-9.101,8.665 M104.853,0.69l-9.104,8.665 M100.296,0.69l-9.097,8.665 M95.746,0.69l-9.102,8.665 M91.193,0.69
					l-9.102,8.665 M86.64,0.69l-9.102,8.665 M82.087,0.69l-9.101,8.665 M77.534,0.69l-9.103,8.665 M72.98,0.69l-9.1,8.665
					 M68.427,0.69l-9.098,8.665 M63.874,0.69l-9.102,8.665 M59.323,0.69l-9.1,8.665 M54.768,0.69l-9.101,8.665 M50.216,0.69
					l-9.102,8.665 M45.663,0.69l-9.099,8.665 M41.11,0.69l-9.101,8.665 M36.556,0.69l-9.099,8.665 M32.004,0.69l-9.103,8.665
					 M27.452,0.69l-9.101,8.665 M22.896,0.69l-9.1,8.665 M18.346,0.69L9.242,9.356 M13.791,0.69L4.692,9.356 M4.688,0.69l-4.306,4.1
					 M9.238,0.69L0.139,9.356"/>

					<rect x="0.388" y="10.276" fill="none" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" width="174.367" height="31.959"/>

					<rect x="36.438" y="74.808" fill="none" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" width="104.26" height="44.258"/>
			</g>
		</g>
	</g>
	<g>
		<circle fill="#A8C0E4" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" cx="59.56" cy="142.107" r="8.202"/>
		<path fill="#A8C0E4" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" d="M87.136,133.905
			c4.529,0,8.201,3.672,8.201,8.201s-3.672,8.203-8.201,8.203c-4.532,0-8.203-3.674-8.203-8.203S82.603,133.905,87.136,133.905z"/>
		<path fill="#A8C0E4" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" d="M115.442,133.905c4.525,0,8.2,3.672,8.2,8.201
			s-3.675,8.203-8.2,8.203c-4.531,0-8.203-3.674-8.203-8.203S110.911,133.905,115.442,133.905z"/>
	</g>
</g>
</svg>
          <p className="shapename">straight with island</p>
          </div>
          </Paper>
        </Grid>
		<Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
          <div className="shapes">
          <svg version="1.1" id="Layer_1"  x="0px" y="0px"
	 width="185px" height="155px" viewBox="0 0 185 155" enable-background="new 0 0 185 155" >
<g>
	<g>
		<circle fill="#A8C0E4" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" cx="176.479" cy="54.208" r="8.202"/>
		<circle fill="#A8C0E4" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" cx="176.479" cy="81.782" r="8.202"/>
		<path fill="#FFFFFF" d="M184.681,108.94c0,4.525-3.67,8.203-8.202,8.203c-4.527,0-8.202-3.678-8.202-8.203
			c0-4.529,3.675-8.203,8.202-8.203C181.011,100.737,184.681,104.411,184.681,108.94"/>
		<path fill="#A8C0E4" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" d="M184.681,110.091
			c0,4.525-3.67,8.199-8.202,8.199c-4.527,0-8.202-3.674-8.202-8.199c0-4.533,3.675-8.205,8.202-8.205
			C181.011,101.886,184.681,105.558,184.681,110.091z"/>
		<circle fill="#A8C0E4" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" cx="176.479" cy="135.487" r="8.202"/>
		<g display="none">
			<rect x="1.211" y="1.425" display="inline" fill="#FFFFFF" width="151.012" height="8.884"/>

				<rect x="1.211" y="1.425" display="inline" fill="none" stroke="#676567" stroke-miterlimit="10" width="151.012" height="8.884"/>
			<path display="inline" fill="none" stroke="#676567" stroke-miterlimit="10" d="M151.901,3.94l-5.42,6.259 M150.418,1.101
				l-7.868,9.098 M146.477,1.101l-7.86,9.098 M142.544,1.101l-7.866,9.098 M138.607,1.101l-7.864,9.098 M134.673,1.101l-7.866,9.098
				 M130.734,1.101l-7.866,9.098 M126.804,1.101l-7.868,9.098 M122.865,1.101l-7.864,9.098 M118.931,1.101l-7.868,9.098
				 M114.993,1.101l-7.866,9.098 M111.058,1.101l-7.868,9.098 M107.121,1.101l-7.868,9.098 M103.188,1.101l-7.869,9.098
				 M99.248,1.101l-7.865,9.098 M95.313,1.101l-7.868,9.098 M91.377,1.101l-7.866,9.098 M87.44,1.101l-7.867,9.098 M83.505,1.101
				l-7.868,9.098 M79.568,1.101l-7.866,9.098 M75.633,1.101l-7.864,9.098 M71.697,1.101l-7.867,9.098 M67.763,1.101l-7.869,9.098
				 M63.826,1.101l-7.863,9.098 M59.89,1.101l-7.868,9.098 M55.954,1.101l-7.868,9.098 M52.02,1.101l-7.869,9.098 M48.082,1.101
				l-7.87,9.098 M44.148,1.101l-7.869,9.098 M40.21,1.101l-7.866,9.098 M36.276,1.101l-7.871,9.098 M32.34,1.101l-7.869,9.098
				 M28.402,1.101l-7.867,9.098 M24.467,1.101l-7.865,9.098 M20.532,1.101l-7.869,9.098 M16.593,1.101l-7.865,9.098 M12.659,1.101
				l-7.866,9.098 M4.787,1.101L1.064,5.405 M8.723,1.101l-7.865,9.098"/>
			<rect x="0.298" y="1.475" display="inline" fill="#FFFFFF" width="7.225" height="152.635"/>

				<rect x="0.298" y="1.475" display="inline" fill="none" stroke="#676567" stroke-miterlimit="10" width="7.225" height="152.635"/>
			<path display="inline" fill="none" stroke="#676567" stroke-miterlimit="10" d="M2.321,1.242l5.134,5.494 M0,2.746l7.455,7.979
				 M0,6.739l7.455,7.983 M0,10.734l7.455,7.979 M0,14.73l7.455,7.976 M0,18.72l7.455,7.979 M0,22.713l7.455,7.979 M0,26.703
				l7.455,7.983 M0,30.7l7.455,7.983 M0,34.691l7.455,7.982 M0,38.685l7.455,7.976 M0,42.673l7.455,7.987 M0,46.67l7.455,7.983
				 M0,50.66l7.455,7.983 M0,54.655l7.455,7.979 M0,58.647l7.455,7.982 M0,62.644l7.455,7.977 M0,66.635l7.455,7.979 M0,70.628
				l7.455,7.979 M0,74.621L7.455,82.6 M0,78.614l7.455,7.978 M0,82.607l7.455,7.975 M0,86.599l7.455,7.981 M0,90.59l7.455,7.985
				 M0,94.581l7.455,7.984 M0,98.578l7.455,7.981 M0,102.573l7.455,7.976 M0,106.562l7.455,7.982 M0,110.552l7.455,7.982 M0,114.547
				l7.455,7.983 M0,118.543l7.455,7.976 M0,122.537l7.455,7.977 M0,126.53l7.455,7.979 M0,130.523l7.455,7.978 M0,134.513
				l7.455,7.979 M0,138.508l7.455,7.978 M0,142.498l7.455,7.985 M0,150.485l3.528,3.775 M0,146.492l7.455,7.984"/>
			<polygon display="inline" fill="#FFFFFF" points="125.83,11.886 125.83,12.158 8.818,12.158 8.818,59.862 8.889,59.862
				8.889,154.139 32.809,154.139 32.809,36.88 125.83,36.88 125.83,154.096 152.951,154.096 152.951,11.886 			"/>
			<polygon display="inline" fill="none" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" points="125.83,11.357
				125.712,11.365 8.818,11.685 8.818,41.267 8.889,41.267 8.889,154.072 32.809,154.072 32.809,36.67 125.83,36.67 125.83,154.021
				152.951,154.021 152.951,11.357 			"/>
		</g>
	</g>
	<g>
		<rect x="1.579" y="0.326" fill="#FFFFFF" width="151.012" height="8.884"/>
		<rect x="1.579" y="0.326" fill="none" stroke="#676567" stroke-miterlimit="10" width="151.012" height="8.884"/>
		<path fill="none" stroke="#676567" stroke-miterlimit="10" d="M152.27,2.838l-5.42,6.259 M150.785,0l-7.867,9.097 M146.846,0
			l-7.863,9.097 M142.911,0l-7.866,9.097 M138.977,0l-7.867,9.097 M135.039,0l-7.864,9.097 M131.102,0l-7.866,9.097 M127.171,0
			l-7.869,9.097 M123.231,0l-7.862,9.097 M119.299,0l-7.871,9.097 M115.361,0l-7.867,9.097 M111.424,0l-7.868,9.097 M107.49,0
			l-7.869,9.097 M103.555,0l-7.869,9.097 M99.616,0l-7.867,9.097 M95.682,0l-7.87,9.097 M91.744,0l-7.866,9.097 M87.809,0
			l-7.867,9.097 M83.871,0l-7.864,9.097 M79.938,0l-7.87,9.097 M76.001,0l-7.865,9.097 M72.065,0l-7.867,9.097 M68.13,0
			l-7.866,9.097 M64.193,0l-7.864,9.097 M60.256,0l-7.864,9.097 M56.322,0l-7.868,9.097 M52.388,0l-7.87,9.097 M48.451,0
			L40.58,9.097 M44.518,0l-7.871,9.097 M40.578,0l-7.867,9.097 M36.643,0l-7.869,9.097 M32.708,0l-7.871,9.097 M28.77,0
			l-7.866,9.097 M24.834,0l-7.866,9.097 M20.899,0l-7.868,9.097 M16.96,0L9.095,9.097 M13.027,0L5.158,9.097 M5.156,0L1.433,4.304
			 M9.091,0L1.225,9.097"/>
		<rect x="0.665" y="0.374" fill="#FFFFFF" width="7.226" height="152.635"/>
		<rect x="0.665" y="0.374" fill="none" stroke="#676567" stroke-miterlimit="10" width="7.226" height="152.635"/>
		<path fill="none" stroke="#676567" stroke-miterlimit="10" d="M2.689,0.141l5.136,5.496 M0.367,1.645l7.458,7.982 M0.367,5.638
			l7.458,7.983 M0.367,9.633l7.458,7.98 M0.367,13.627l7.458,7.976 M0.367,17.619l7.458,7.979 M0.367,21.612l7.458,7.978
			 M0.367,25.602l7.458,7.983 M0.367,29.597l7.458,7.985 M0.367,33.588l7.458,7.981 M0.367,37.584l7.458,7.975 M0.367,41.574
			l7.458,7.983 M0.367,45.571l7.458,7.981 M0.367,49.56l7.458,7.981 M0.367,53.554l7.458,7.979 M0.367,57.543l7.458,7.985
			 M0.367,61.542l7.458,7.977 M0.367,65.535l7.458,7.977 M0.367,69.526l7.458,7.979 M0.367,73.519l7.458,7.979 M0.367,77.511
			l7.458,7.979 M0.367,81.506l7.458,7.978 M0.367,85.498l7.458,7.981 M0.367,89.49l7.458,7.984 M0.367,93.479l7.458,7.985
			 M0.367,97.476l7.458,7.981 M0.367,101.47l7.458,7.977 M0.367,105.46l7.458,7.983 M0.367,109.451l7.458,7.983 M0.367,113.447
			l7.458,7.982 M0.367,117.442l7.458,7.978 M0.367,121.433l7.458,7.979 M0.367,125.428l7.458,7.979 M0.367,129.422l7.458,7.978
			 M0.367,133.414l7.458,7.979 M0.367,137.405l7.458,7.979 M0.367,141.397l7.458,7.983 M0.367,149.381l3.529,3.778 M0.367,145.39
			l7.458,7.983"/>
		<polygon fill="#FFFFFF" points="126.197,10.256 126.197,10.256 9.186,10.256 9.186,58.76 9.255,58.76 9.255,153.038
			36.624,153.038 36.624,35.779 126.197,35.779 126.197,152.996 153.318,152.996 153.318,10.256 		"/>
		<polygon fill="#fff" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" points="126.197,10.256 126.08,10.256
			9.186,10.584 9.186,40.166 9.255,40.166 9.255,152.97 37.773,152.97 37.773,35.569 125.048,35.569 125.048,152.922
			153.318,152.922 153.318,10.256 		"/>
	</g>
</g>
</svg>

          <p className="shapename">u - shape peninsula</p>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
          <div className="shapes">
          <svg version="1.1" id="Layer_1" x="0px" y="0px"
	 width="174px" height="153px" viewBox="0 0 174 153" enable-background="new 0 0 174 153">
<g>
	<g>
		<rect x="1.393" y="0.314" fill="#FFFFFF" width="152.14" height="9.204"/>
		<rect x="1.393" y="0.314" fill="none" stroke="#676567" stroke-miterlimit="10" width="152.14" height="9.204"/>
		<path fill="none" stroke="#676567" stroke-miterlimit="10" d="M153.693,2.927l-5.471,6.466 M152.194,0l-7.948,9.393 M148.218,0
			l-7.945,9.393 M144.242,0l-7.946,9.393 M140.27,0l-7.95,9.393 M136.293,0l-7.949,9.393 M132.313,0l-7.946,9.393 M128.34,0
			l-7.949,9.393 M124.362,0l-7.948,9.393 M120.383,0l-7.946,9.393 M116.409,0l-7.949,9.393 M112.434,0l-7.949,9.393 M108.458,0
			l-7.947,9.393 M104.479,0l-7.948,9.393 M100.504,0l-7.949,9.393 M96.523,0l-7.941,9.393 M92.551,0l-7.949,9.393 M88.574,0
			l-7.945,9.393 M84.599,0l-7.946,9.393 M80.625,0l-7.949,9.393 M76.645,0l-7.945,9.393 M72.672,0l-7.95,9.393 M68.695,0
			l-7.953,9.393 M64.718,0l-7.944,9.393 M60.742,0l-7.946,9.393 M56.766,0l-7.948,9.393 M52.79,0l-7.946,9.393 M48.813,0
			l-7.95,9.393 M44.836,0l-7.948,9.393 M40.856,0l-7.945,9.393 M36.884,0l-7.95,9.393 M32.906,0l-7.947,9.393 M28.93,0l-7.945,9.393
			 M24.954,0l-7.947,9.393 M20.976,0l-7.944,9.393 M17.002,0L9.055,9.393 M13.023,0L5.079,9.393 M5.072,0l-3.76,4.445 M9.047,0
			L1.102,9.393"/>
		<rect x="0.32" y="0.363" fill="#FFFFFF" width="9.198" height="152.135"/>
		<rect x="0.32" y="0.363" fill="none" stroke="#676567" stroke-miterlimit="10" width="9.198" height="152.135"/>
		<path fill="none" stroke="#676567" stroke-miterlimit="10" d="M2.933,0.197l6.466,5.471 M0,1.695l9.398,7.95 M0,5.671l9.398,7.948
			 M0,9.647l9.398,7.948 M0,13.623l9.398,7.95 M0,17.6l9.398,7.948 M0,21.578l9.398,7.949 M0,25.554l9.398,7.95 M0,29.526
			l9.398,7.95 M0,33.508l9.398,7.947 M0,37.48l9.398,7.948 M0,41.462l9.398,7.943 M0,45.438l9.398,7.946 M0,49.412l9.398,7.95
			 M0,53.389l9.398,7.946 M0,57.364l9.398,7.951 M0,61.339l9.398,7.948 M0,65.317l9.398,7.944 M0,69.293l9.398,7.948 M0,73.27
			l9.398,7.946 M0,77.245l9.398,7.948 M0,81.222l9.398,7.946 M0,85.195l9.398,7.95 M0,89.172l9.398,7.95 M0,93.147l9.398,7.952
			 M0,97.128l9.398,7.946 M0,101.105l9.398,7.945 M0,105.08l9.398,7.95 M0,109.056l9.398,7.947 M0,113.034l9.398,7.946 M0,117.007
			l9.398,7.948 M0,120.982l9.398,7.948 M0,124.963l9.398,7.946 M0,128.934l9.398,7.948 M0,132.913l9.398,7.948 M0,136.891
			l9.398,7.948 M0,140.865l9.398,7.948 M0,148.819l4.448,3.758 M0,144.841l9.398,7.949"/>
		<polygon fill="#fff" points="153.532,10.519 10.686,10.519 10.686,40.006 10.773,40.006 10.773,152.462 39.911,152.462
			39.911,40.006 153.532,40.006 		"/>
		<polygon fill="none" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" points="153.532,10.519 10.686,10.519
			10.686,40.006 10.773,40.006 10.773,152.462 39.911,152.462 39.911,40.006 153.532,40.006 		"/>
		<rect x="100.262" y="84.261" fill="#fff" width="42.08" height="62.451"/>

			<rect x="100.262" y="84.261" fill="none" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" width="42.08" height="62.451"/>
	</g>
	<g>
		<path fill="#A8C0E4" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" d="M173.712,104.133
			c0,4.526-3.671,8.201-8.202,8.201c-4.527,0-8.202-3.675-8.202-8.201c0-4.531,3.675-8.202,8.202-8.202
			C170.041,95.931,173.712,99.602,173.712,104.133z"/>
		<circle fill="#A8C0E4" stroke="#241F20" stroke-width="2" stroke-miterlimit="10" cx="165.51" cy="129.53" r="8.202"/>
	</g>
</g>
</svg>
          <p className="shapename">l - shape with island</p>
          </div>
          </Paper>
        </Grid>

     </Grid>
     </div>
     </Grid>
    </Grid>
    </div>
    </div>
  );
}
