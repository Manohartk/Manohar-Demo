import React from 'react';
import PropTypes from 'prop-types';
import PanelElementEditor from './panel-element-editor/panel-element-editor';
import PanelGroupEditor from './panel-group-editor';
import If from '../../utils/react-if';
import './3dmodule.css';

import ToolbarButton from '../toolbar/toolbar-button';
// import ToolbarButton from '../toolbar/toolbar';
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


const STYLE = {
  position: 'absolute',
  top: '0',
  right: '0',
  backgroundColor: 'transparent',
  display: 'block',
  overflowY: 'auto',
  overflowX: 'hidden',
  paddingBottom: '20px',
  zIndex:'11',
  height: 'auto'
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

const mapButtonsCb = (el, ind) => <If key={ind} condition={el.condition} style={{ position: 'relative' }}>{el.dom}</If>;

export default function Sidebar({ state, width, height, sidebarComponents }) {

  let selectedLayer = state.getIn(['scene', 'selectedLayer']);

  //TODO change in multi-layer check
  let selected = state.getIn(['scene', 'layers', selectedLayer, 'selected']);

  let multiselected =
    selected.lines.size > 1 ||
    selected.items.size > 1 ||
    selected.holes.size > 1 ||
    selected.areas.size > 1 ||
    selected.lines.size + selected.items.size + selected.holes.size + selected.areas.size > 1;

  let selectedGroup = state.getIn(['scene', 'groups']).findEntry( g => g.get('selected') );

  let sorter = [
    //{ index: 0, condition: true, dom: <PanelGuides state={state}/> },
    //{ index: 1, condition: true, dom: <PanelLayers state={state} /> },
    //{ index: 2, condition: true, dom: <PanelLayerElements mode={state.mode} layers={state.scene.layers} selectedLayer={state.scene.selectedLayer} /> },
    //{ index: 3, condition: true, dom: <PanelGroups mode={state.mode} groups={state.scene.groups} layers={state.scene.layers} /> },
    { index: 0, condition: !multiselected, dom: <PanelElementEditor state={state} /> },
    //{ index: 5, condition: multiselected, dom: <PanelMultiElementsEditor state={state} /> },
    //{ index: 1, condition: !!selectedGroup, dom: <PanelGroupEditor state={state} groupID={selectedGroup ? selectedGroup[0] : null} /> }
  ];

  sorter = sorter.concat(sidebarComponents.map((Component, key) => {
    return Component.prototype ? //if is a react component
      {
        condition: true,
        dom: React.createElement(Component, { state, key })
      } :
      {                           //else is a sortable toolbar button
        index: Component.index,
        condition: Component.condition,
        dom: React.createElement(Component.dom, { state, key })
      };
  }));


  function animatetoggle(event){
    jQuery("ul.expand_menu").removeClass("expand_menu");
    jQuery(".submenu_animate").toggleClass("expand_menu");
  }
  function exportmenu(event){
    jQuery("ul.expand_menu").removeClass("expand_menu");
    jQuery(".submenu_export").toggleClass("expand_menu");
  }
  function bommenu(event){
    jQuery("ul.expand_menu").removeClass("expand_menu");
    jQuery(".submenu_bom").toggleClass("expand_menu");
  }
  function cameramenu(event){
    jQuery("ul.expand_menu").removeClass("expand_menu");
    jQuery(".submenu_camera").toggleClass("expand_menu");
  }
  function settingsmenu(event){
    jQuery("ul.expand_menu").removeClass("expand_menu");
    jQuery(".submenu_setting").toggleClass("expand_menu");
  }
  function twodmenu(event){
    jQuery("ul.expand_menu").removeClass("expand_menu");
    jQuery(".submenu_twod").toggleClass("expand_menu");
  }
  function arrow_right(event){
    jQuery(".arrow__rightbox").toggleClass("rightempty");
    jQuery(".tdright_fixed").toggleClass("hide");
  }


function sidebardiv()
{

return(
  <div className="tdright_sidebar onthreeD hide">

<div className="arrow__position">

      <div className="arrow__rightbox" onClick={arrow_right}>
        <span className="arrow_icon_setup">
          <img src='./images/threed/arrow-right-image.svg' alt="Right Arrow"/>
        </span>
      </div>

      <div className="tdright_fixed">
      <div className="animate_setup">
          <div onClick={animatetoggle} className="animate__menu">
              <span id="submenu_animate">
                <img src='./images/threed/animation.svg'  alt="Animation" />
              </span><br/>
              ANIMATION
          </div>
          <ul className="submenu_animate top_animate">
              <li>
              <span>
                <img src='./images/threed/cabinet.svg' />
              </span><br/>BASE</li>
              <li>
              <span>
                <img src='./images/threed/cabinet.svg' />
              </span><br/>WALL</li>
              <li><span>
                <img src='./images/threed/cabinet.svg' />
              </span><br/>TALL</li>
          </ul>
        </div>

        <div className="export_setup">
            <div onClick={exportmenu} className="export__menu">
                <span id="submenu_export">
                  <img src='./images/threed/export.svg' />
                </span><br/>
                EXPORT
            </div>
            <ul className="submenu_export top_export">
                <li>
                <span>
                  <img src='./images/threed/cabinet.svg' />
                </span><br/>BASE</li>
                <li>
                <span>
                  <img src='./images/threed/cabinet.svg' />
                </span><br/>WALL</li>
                <li><span>
                  <img src='./images/threed/cabinet.svg' />
                </span><br/>TALL</li>
            </ul>
          </div>

          <div className="bom_setup">
              <div onClick={bommenu} className="bom__menu">
                  <span id="submenu_bom">
                    <img src='./images/threed/bom.svg' />
                  </span><br/>
                  BOM
              </div>
              <ul className="submenu_bom top_bom">
                  <li>
                  <span>
                    <img src='./images/threed/cabinet.svg' />
                  </span><br/>BASE</li>
                  <li>
                  <span>
                    <img src='./images/threed/cabinet.svg' />
                  </span><br/>WALL</li>
                  <li><span>
                    <img src='./images/threed/cabinet.svg' />
                  </span><br/>TALL</li>
              </ul>
            </div>

            <div className="camera_setup">
                <div onClick={cameramenu} className="camera__menu">
                    <span>
                      <img src='./images/threed/camera.svg' />
                    </span><br/>
                    CAMERA
                </div>
                <ul className="submenu_camera top_camera">
                    <li>
                    <span>
                      <img src='./images/threed/cabinet.svg' />
                    </span><br/>BASE</li>
                    <li>
                    <span>
                      <img src='./images/threed/cabinet.svg' />
                    </span><br/>WALL</li>
                    <li><span>
                      <img src='./images/threed/cabinet.svg' />
                    </span><br/>TALL</li>
                </ul>
              </div>

              <div className="setting_setup">
                  <div onClick={settingsmenu} className="setting_menu">
                      <span>
                        <img src='./images/threed/settings.svg' />
                      </span><br/>
                      SETTINGS
                  </div>
                  <ul className="submenu_setting top_setting">
                      <li>
                      <span>
                        <img src='./images/threed/cabinet.svg' />
                      </span><br/>BASE</li>
                      <li>
                      <span>
                        <img src='./images/threed/cabinet.svg' />
                      </span><br/>WALL</li>
                      <li><span>
                        <img src='./images/threed/cabinet.svg' />
                      </span><br/>TALL</li>
                  </ul>
                </div>

                <div className="twod_setup">
                    <div onClick={twodmenu} className="twod_menu">
                        <span>
                          <img src='./images/threed/2d.svg' />
                        </span><br/>
                        2D
                    </div>
                  </div>
            </div>
        </div>
        </div>
);
}

  return (
    <aside
      style={{ width, height, ...STYLE }}
      onKeyDown={event => event.stopPropagation()}
      onKeyUp={event => event.stopPropagation()}
      className="sidebar"
    >
      {sorter.sort(sortButtonsCb).map(mapButtonsCb)}
      {sidebardiv()}
    </aside>
  );

}



Sidebar.propTypes = {
  state: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
