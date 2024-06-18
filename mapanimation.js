// This array contains the coordinates for all bus stops between Universidad de Concepcion y Universidad del Biobio
const busStops = [
    [-73.03958691892363, -36.8272576161341],
    [-73.03826782036859, -36.826717779993125],
    [-73.03678654745326, -36.824847446232475],
    [-73.03607999880766, -36.82216837392339],
    [-73.03580109801507, -36.82093795372112],
    [-73.03444378101925, -36.8186556703483],
    [-73.03291912348904, -36.81699849150715],
    [-73.03151222405066, -36.81621950580693],
    [-73.0292810180944, -36.81613515656448],
    [-73.02569869259047, -36.817583965964566],
    [-73.02369680502413, -36.81830339878276],
    [-73.01851544850227, -36.820124277876936],
    [-73.01767874626867, -36.82028800602314],
    [-73.0137617400136, -36.82037235070073],
  ];
  
  mapboxgl.accessToken = 'pk.eyJ1IjoienlyZWwiLCJhIjoiY2x4NG85ZXBnMTRzYzJpb2Fha2NycTd1aSJ9.PEHIcQBrlWjp4tcrHgCYYA';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-73.03958691892363, -36.8272576161341],
    zoom: 14,
  });
  
  var marker = new mapboxgl.Marker()
    .setLngLat([-73.03958691892363, -36.8272576161341])
    .addTo(map)

  let counter = 0;

  function move() {
    setTimeout(() => {
      if (counter >= busStops.length) {counter = 0};
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000)
  }