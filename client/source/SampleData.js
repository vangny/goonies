const routes = [{
  name: 'Half Dome',
  type: 'Featured Hike',
  difficulty: 'black',
  location: 'Yosemite Valley, California',
  distance: 14.7,
  start: 'June 10, 10:05 AM',
  end: 'June 10, 3:35 PM',
},
{
  name: 'Devil\'s Drop',
  type: 'Featured Hike',
  difficulty: 'black',
  location: 'Yosemite Valley, California',
  distance: 15.2,
  start: 'June 5, 8:05 AM',
  end: 'June 5, 2:21 PM',
},
{
  name: 'Stairway To Heaven',
  type: 'Featured Hike',
  difficulty: 'black',
  location: 'Yosemite Valley, California',
  distance: 12,
  start: 'May 2, 9:30 AM',
  end: 'May 2, 1:56 PM',
}];

export default routes;

/*
PARKS API - ALERTS
https://api.nps.gov/api/v1/alerts?parkCode=yose%2C&stateCode=ca&limit=10
{
  "total": 2,
  "data": [
    {
      "title": "Expect traffic congestion in Yosemite",
      "id": "32B613BF-1DD8-B71B-0BBA82FCAED8C277",
      "description": "While we welcome you to Yosemite, you should expect traffic congestion...",
      "category": "Information",
      "url": "https://www.nps.gov/yose/planyourvisit/traffic.htm",
      "parkCode": "yose"
    },
    {
      "title": "Hantavirus pulmonary disease and plague",
      "id": "37ADA6BE-1DD8-B71B-0BFE8536BDC1DCE0",
      "description": "Wild animals can transmit numerous diseases. Avoid sleeping in...",
      "category": "Information",
      "url": "https://www.nps.gov/yose/planyourvisit/health.htm",
      "parkCode": "yose"
    }
  ],
  "limit": 10,
  "start": 1
}


PARK INFO
https://api.nps.gov/api/v1/parks?parkCode=yose&stateCode=ca
{
  "total": 1,
  "data": [
    {
      "states": "CA",
      "latLong": "lat:37.84883288, long:-119.5571873",
      "description": "Not just a great valley, but a shrine to human foresight, the strength...",
      "designation": "National Park",
      "parkCode": "yose",
      "id": "4324B2B4-D1A3-497F-8E6B-27171FAE4DB2",
      "directionsInfo": "You can drive to Yosemite all year and enter via Highways 41, ...",
      "directionsUrl": "http://www.nps.gov/yose/planyourvisit/driving.htm",
      "fullName": "Yosemite National Park",
      "url": "https://www.nps.gov/yose/index.htm",
      "weatherInfo": "Yosemite National Park covers nearly 1,200 square miles in the Sierra ...",
      "name": "Yosemite"
    }
  ],
  "limit": 50,
  "start": 1
}
*/
