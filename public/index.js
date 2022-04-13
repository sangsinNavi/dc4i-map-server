import { OvrAttributeFill } from "./Overlay/GraphicAttribute.js";

// 지도 생성
var map = new maplibregl.Map({
  container: "map",
  //style: 'https://api.maptiler.com/maps/basic/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
  //style: './positron-gl-style-master/style.json',
  style: "./data/style/basic/style.json",
  //style: './data/style/dark/style.json',
  center: [127, 37.5],
  zoom: 6,
});
var graphicIndex = 0;
function addRectangle() {
  var geojson = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [127.5 + graphicIndex / 100, 37.5],
          [127.5 + graphicIndex / 100, 38],
          [128 + graphicIndex / 100, 38],
          [128 + graphicIndex / 100, 37.5],
          [127.5 + graphicIndex / 100, 37.5],
        ],
      ],
    },
  };

  var color = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

  var graphicId = "graphic_rectangle_" + graphicIndex;
  var rectangle = map.getSource(graphicId);
  rectangle = map.addSource(graphicId, {
    type: "geojson",
    data: geojson,
  });

  var ovrAttributeFill = new OvrAttributeFill(graphicId + "_Fill", graphicId);
  ovrAttributeFill.setFillColor(color);
  ovrAttributeFill.setFillSortKey(graphicIndex);
  if (graphicIndex > 0) {
    map.addLayer(ovrAttributeFill.getLayerInfo(), "graphic_rectangle_" + (graphicIndex - 1) + "_Fill");
  } else {
    map.addLayer(ovrAttributeFill.getLayerInfo());
  }

  graphicIndex++;
}

function addEllipse() {}

function addPolygon() {}

function addPolyline() {}

document.getElementById("buttons").addEventListener("click", function (event) {
  var item = event.target.id.substr("button-".length);
  if (item === "rectangle") {
    addRectangle();
  } else if (item === "eliipse") {
    addEllipse();
  } else if (item === "polygon") {
    addPolygon();
  } else if (item === "polyline") {
    addPolyline();
  }
});
