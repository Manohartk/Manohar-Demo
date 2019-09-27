import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdSettings, MdUndo, MdDirectionsRun } from 'react-icons/md';
import { FaFile, FaMousePointer, FaPlus } from 'react-icons/fa';
import ToolbarButton from './toolbar-button';
import ToolbarSaveButton from './toolbar-save-button';
import ToolbarLoadButton from './toolbar-load-button';
import If from '../../utils/react-if';
import './3dmodule.css';
import $ from 'jquery';

import {
  MODE_IDLE,
  MODE_3D_VIEW,
  MODE_3D_FIRST_PERSON,
  MODE_VIEWING_CATALOG,
  MODE_CONFIGURING_PROJECT
} from '../../constants';
import * as SharedStyle from '../../shared-style';

const iconTextStyle = {
  fontSize: '11px',
  textDecoration: 'none',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: '10px auto 0',
  userSelect: 'none',
};

const twod_styles = {
  fontSize: '11px',
  color: 'rgb(255, 255, 255)',
  margin: '0 auto 5px',
  padding: '0'
};

 const Icon2D = ( {style} ) => <p style={{...iconTextStyle, ...style}}>2D View</p>;
const Icon3D = ( {style} ) => <p style={{...iconTextStyle, ...style}}>3D View</p>;

const ASIDE_STYLE = {
  color: '#fff',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  backgroundColor: SharedStyle.PRIMARY_COLOR.main,
  padding: '25px 0',
  textAlign: 'center',
  maxWidth: '90px'
};

const sortButtonsCb = (a, b) => {
  if (a.index === undefined || a.index === null) {
    a.index = Number.MAX_SAFE_INTEGER;
  }

  if (b.index === undefined || b.index === null) {
    b.index = Number.MAX_SAFE_INTEGER;
  }

  return a.index - b.index;
};

const mapButtonsCb = (el, ind) => {
  return (
    <If
      key={ind}
      condition={el.condition}
      style={{ position: 'relative' }}
    >
      {el.dom}
    </If>
  );
};

export default class Toolbar extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

componentDidMount() {

jQuery(document).ready(function($){

 function getFeet(n) {
    return Math.floor(n / 12);
  }

  function getInches(n) {
    return (n % 12);
  }

  function getInchDec(n) {
    if (n === 0) {
      return ".00";
    } else if (n === 1) {
      return ".01";
    } else if (n === 2) {
      return ".02";
    } else if (n === 3) {
      return ".03";
    } else if (n === 4) {
      return ".04";
    } else if (n === 5) {
      return ".05";
    } else if (n === 6) {
      return ".06";
    } else if (n === 7) {
      return ".07";
    } else if (n === 8) {
      return ".08";
    } else if (n === 9) {
      return ".09";
    } else if (n === 10) {
      return ".10";
    } else if (n === 11) {
      return ".11";
    }
  }

  function roof(h) {
    var w = $('#numbersWidth').spinner("value");
    var rt = $('input[name="roof_type"]:checked').val();
    var p = $('#pitch').val();
    var t = (w * p) / 12;
    var r = Math.ceil(t);
    if (rt === 'l') {
      return h + r;
    } else {
      return h;
    }
  }

  jQuery(document).ready(function($) {
    var spinner = $(".numbers").spinner();
    // spinner for width
    $("#numbersWidth").spinner({
      min: 92,
      step: 1,
      max: 360,
      spin: function(event, ui) {
        $("#width").text(getFeet(ui.value) + "' " + getInches(ui.value) + '"');
        $("#frame_width").val(getFeet(ui.value) + "" + getInchDec(getInches(ui.value)));
        var wh = roof($('#numbersHeight').spinner("value"));
        $("#size2").val(getFeet(wh) + "' " + getInches(wh) + '"');
        $("#side_2_height").val(getFeet(wh) + "" + getInchDec(getInches(wh)));
      }
    });
    // spinner for heights left and right side
    $("#numbersHeight").spinner({
      min: 114,
      step: 1,
      max: 360,
      spin: function(event, ui) {
        var newH = roof(ui.value);
        var xc = (ui.value + 1);
        var test = getFeet(newH) + "" + getInchDec(getInches(newH));
         if (Number(test) < 0.01){
           alert("You cannot be lower than 1 inch");
           alert(xc);
           $("#side_2_height").val(0.01);
           $("#size2").val("0' 1"+'"');
           $(this).spinner("aria-valuenow", xc);
         } else {
           $("#size").val(getFeet(ui.value) + "' " + getInches(ui.value) + '"');
           $("#side_1_height").val(getFeet(ui.value) + "" + getInchDec(getInches(ui.value)));
           $("#side_2_height").val(getFeet(newH) + "" + getInchDec(getInches(newH)));
           $("#size2").val(getFeet(newH) + "' " + getInches(newH) + '"');
        }
      }
    });
    $('.idesign_view svg rect').attr( 'fill','#ffffff');

  });

    $('.ui-spinner-up .ui-icon').html('&#43;');
    $('.ui-spinner-down .ui-icon').html('&#8722;');
    $( ".ui-spinner-down" ).insertBefore( ".ui-spinner-up" );
});


jQuery(document).click(function(e) {
  jQuery("ul.expand_menu").removeClass("expand_menu");
});

jQuery(document).ready(function($) {

    jQuery("#threeD_add").click(function(){
      jQuery(".onthreeD").removeClass('hide');
      jQuery(".arrow__leftbox").removeClass('hide');
      jQuery(".default__loadedmenu").addClass('hide');
    });

    jQuery(".arrow__leftbox").click(function(){
        jQuery(".autohide_section").toggleClass('hide');
        jQuery(".idesign_view").toggleClass('addcolor');
    });

});

  jQuery('img.svg').each(function() {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
          var $svg = jQuery(data).find('svg');
          if (typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          if (typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass + ' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
              $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }
          $img.replaceWith($svg);

      }, 'xml');

  });


}


  shouldComponentUpdate(nextProps, nextState) {
    return this.props.state.mode !== nextProps.state.mode ||
      this.props.height !== nextProps.height ||
      this.props.width !== nextProps.width ||
      this.props.state.alterate !== nextProps.state.alterate;
  }



  render() {

    let {
      props: { state, width, height, toolbarButtons, allowProjectFileSupport },
      context: { projectActions, viewer3DActions, translator }
    } = this;

    let mode = state.get('mode');
    let alterate = state.get('alterate');
    let alterateColor = alterate ? SharedStyle.MATERIAL_COLORS[500].orange : '';

    function cabinet(){
      jQuery("ul.expand_menu").removeClass("expand_menu");
      jQuery(".submenu_cabinet").toggleClass("expand_menu");
    }
    function door()
    {
      jQuery("ul.expand_menu").removeClass("expand_menu");
      jQuery(".submenu_door").toggleClass("expand_menu");
    }
    function handle()
    {
      jQuery("ul.expand_menu").removeClass("expand_menu");
      jQuery(".submenu_handle").toggleClass("expand_menu");
    }
    function misc()
    {
      jQuery("ul.expand_menu").removeClass("expand_menu");
      jQuery(".submenu_misc").toggleClass("expand_menu");
    }
    function appliances()
    {
      jQuery("ul.expand_menu").removeClass("expand_menu");
     jQuery(".submenu_appliances").toggleClass("expand_menu");
    }
    function decor()
    {
      jQuery("ul.expand_menu").removeClass("expand_menu");
     jQuery(".submenu_decor").toggleClass("expand_menu");
    }
    function submitbtn()
    {
      jQuery("ul.expand_menu").removeClass("expand_menu");
     jQuery(".submenu_sbt").toggleClass("expand_menu");
    }
    function arrow_left(event){
      jQuery(".arrow__leftbox").toggleClass("leftempty");
      jQuery(".logoIcon, .sidemenu, .default__loadedmenu").toggleClass("hide");
    }

    return (
    <div className="parent__aside">

      <div className="arrow__leftbox hide" onClick={arrow_left}>
        <span className="arrow_icon_setup">
          <img src='./images/threed/arrow-right-image.svg' alt="Right Arrow"/>
        </span>
      </div>

      <div className="icons_redoflt onthreeD hide">
          <div className="icons__topbox">
            <ul className="toprelated__items">
              <li><span className="svg__icon"><img className="svg" src='./images/threed/zoomout.svg' alt="zoomout"/></span></li>
              <li><span className="svg__icon"><img className="svg" src='./images/threed/zoomin.svg' alt="zoomin"/></span></li>
              <li><span className="svg__icon"><img className="svg" src='./images/threed/rotateleft.svg' alt="rotateleft"/></span></li>
              <li><span className="svg__icon"><img className="svg" src='./images/threed/rotateright.svg' alt="rotateright"/></span></li>
              <li><span className="svg__icon"><img className="svg" src='./images/threed/fullwidth.svg' alt="fullwidth"/></span></li>
            </ul>
          </div>
          <div className="addcarticon__topbox">
              <div className="cartlocate">
                <span className="svg__icon"><img src='./images/threed/cart.svg' alt="cart"/></span>
              </div>
          </div>
      </div>

      <aside style={{ ...ASIDE_STYLE, maxHeight: height }} className='toolbar autohide_section'>

        <div className='logoIcon'>
          <a href='/'>
            <img src='images/logo-icon.png' />
          </a>
        </div>

        <div className="threedview__structure onthreeD hide">
          <div className="sidemenu">
            <div  className="cabinet_setup">
                <div onClick={cabinet} className="cabinet__menu">
                    <span>
                      <img className="svg" src='./images/threed/cabinet.svg' />
                    </span><br/>
                    CABINET
                </div>
                <ul className="submenu_cabinet top_cap">
                    <li>
                    <span>
                      <img className="svg" src='./images/threed/cabinet.svg' />
                    </span><br/>BASE</li>
                    <li>
                    <span>
                      <img className="svg" src='./images/threed/cabinet.svg' />
                    </span><br/>WALL</li>
                    <li><span>
                      <img className="svg" src='./images/threed/cabinet.svg' />
                    </span><br/>TALL</li>
                </ul>
              </div>

              <div className="door_style">
                  <div onClick={door} className="door_setup">
                    <span>
                      <img className="svg" src='./images/threed/door-style.svg' />
                    </span><br/>
                    DOOR STYLES
                  </div>
                  <ul className="submenu_door top_door">
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>BASE</li>
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>WALL</li>
                      <li><span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>TALL</li>
                  </ul>
              </div>

              <div className="handle_style">
                  <div onClick={handle} className="handle_setup">
                    <span>
                      <img className="svg" src='./images/threed/handles.svg' />
                    </span><br/>
                    HANDLE
                  </div>
                  <ul className="submenu_handle top_handle">
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>BASE</li>
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>WALL</li>
                      <li><span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>TALL</li>
                  </ul>
              </div>

              <div className="misc_style">
                  <div onClick={misc} className="misc_setup">
                    <span>
                      <img className="svg" src='./images/threed/misc.svg' />
                    </span><br/>
                    MISC
                  </div>
                  <ul className="submenu_misc top_misc">
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>BASE</li>
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>WALL</li>
                      <li><span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>TALL</li>
                  </ul>
              </div>

              <div className="appliances_style">
                  <div onClick={appliances} className="appliances_setup">
                    <span>
                      <img className="svg"  src='./images/threed/appliances.svg' />
                    </span><br/>
                    APPLIANCES
                  </div>
                  <ul className="submenu_appliances top_appliances">
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>BASE</li>
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>WALL</li>
                      <li><span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>TALL</li>
                  </ul>
              </div>

              <div className="decor_style">
                  <div onClick={decor} className="decor_setup">
                    <span>
                      <img className="svg" src='./images/threed/decor.svg' />
                    </span><br/>
                    DECOR
                  </div>
                  <ul className="submenu_decor top_decor">
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>BASE</li>
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>WALL</li>
                      <li><span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>TALL</li>
                  </ul>
              </div>

              <div className="sbt_style">
                  <div onClick={submitbtn} className="sbt_setup">
                    <span>
                      <img className="svg" src='./images/threed/submit.svg' />
                    </span><br/>
                    SUBMIT
                  </div>
                  <ul className="submenu_sbt top_sbt">
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>BASE</li>
                      <li>
                      <span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>WALL</li>
                      <li><span>
                        <img className="svg" src='./images/threed/cabinet.svg' />
                      </span><br/>TALL</li>
                  </ul>
              </div>

          </div>
        </div>

        <div className="default__loadedmenu">
          <div className='ceilingBox'>
            <label>Ceiling Height</label>
            <p style={{ position: 'relative' }}>
              <input type='text' id='size' className='sizes form-control' readOnly placeholder='9&#39; 6&#34;' />
              <input id='numbersHeight' className='numbers' value='114' readOnly hidden='hidden' />
            </p>
          </div>
          <ToolbarButton data_btnname="threeD_add"
            active={[MODE_3D_VIEW].includes(mode)}
            onClick={event => viewer3DActions.selectTool3DView()} >
            <Icon3D style={twod_styles} /><img className="svg" src='./images/icon-3dview.svg'/>
          </ToolbarButton>

          <ToolbarButton
            active={[MODE_IDLE].includes(mode)}
            onClick={event => projectActions.setMode( MODE_IDLE )}>
            <Icon2D style={twod_styles} /><img className="svg" src='./images/icon-3dview.svg'/>
          </ToolbarButton>

          <ToolbarButton data_btnname="threeD_addelement"
            active={[MODE_VIEWING_CATALOG].includes(mode)}
            onClick={event => projectActions.openCatalog()}>
            <p style={twod_styles}>Add Element</p><img className="svg" src='./images/icon-addelement.svg' />
          </ToolbarButton>

        </div>
      </aside>

      </div>
    )
  }
}

Toolbar.propTypes = {
  state: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  allowProjectFileSupport: PropTypes.bool.isRequired,
  toolbarButtons: PropTypes.array
};

Toolbar.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
