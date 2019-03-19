import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

function bb8() {
	var $dW = document.getElementsByClassName('.bb8').css('width');
/*var $w = $( window ).width();
$dW = $dW.replace('px', '');
$dW = parseInt($dW);
var $dPos = 0;
var $dSpeed = 1;
var $dMinSpeed = 1;
var $dMaxSpeed = 4;
var $dAccel = 1.04;
var $dRot = 0;
var $mPos = $w - $w/5;
var $slowOffset = 120;
var $movingRight = false;
*/
/*
function moveDroid(){
  if($mPos > $dPos + ($dW/4)){
    // moving right
    if(!$movingRight){
      $movingRight = true;
      $('.antennas').addClass('right');
      $('.eyes').addClass('right');
    }
    if($mPos - $dPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($mPos-$dPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos + $dSpeed;
    $dRot = $dRot + $dSpeed;
  } else if($mPos < $dPos - ($dW/4)){
    // moving left
    if($movingRight){
      $movingRight = false;
      $('.antennas').removeClass('right');
      $('.eyes').removeClass('right');
    }
    if($dPos - $mPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($dPos - $mPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos - $dSpeed;
    $dRot = $dRot - $dSpeed;
  } else { }
  $('.bb8').css('left', $dPos);
  $('.ball').css({ WebkitTransform: 'rotate(' + $dRot + 'deg)'});
  $('.ball').css({ '-moz-transform': 'rotate(' + $dRot + 'deg)'});
}

setInterval(moveDroid, 10);

$( document ).on( "mousemove", function( event ) {
  $('h2').addClass('hide');
  $mPos = event.pageX;
  return $mPos;
});*/

}

class Footer extends Component {

	render() {

		return (
			<footer>

			</footer>
		);
	}
}

        /*<div className="bb8">
          <div className="antennas">
            <div className="antenna short"></div>
            <div className="antenna long"></div>
          </div>
          <div className="head">
            <div className="stripe one"></div>
            <div className="stripe two"></div>
            <div className="eyes">
              <div className="eye one"></div>
              <div className="eye two"></div>
            </div>
            <div className="stripe three"></div>
          </div>
          <div className="ball">
            <div className="lines one"></div>
            <div className="lines two"></div>
            <div className="ring one"></div>
            <div className="ring two"></div>
            <div className="ring three"></div>
          </div>
          <div className="shadow"></div>
        </div>  */
export default Footer;


/*
<div className="bb8">


</div>
*/