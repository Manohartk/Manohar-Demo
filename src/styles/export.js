import * as TabsStyle from './tabs.css';

export {
  TabsStyle
};

export default {
  TabsStyle
};


window.onload=function(){

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

    console.log(p);

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
    $('.idesign_view svg rect').attr( 'fill','#ffffff')
  });

    $('.ui-spinner-up .ui-icon').html('&#43;');
    $('.ui-spinner-down .ui-icon').html('&#8722;');
    $( ".ui-spinner-down" ).insertBefore( ".ui-spinner-up" );
    }
