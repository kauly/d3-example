type Measure = {
  time: number;
  summary: string;
  icon: string;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  visibility: number;
  ozone: number;
};
export type WeatherType = {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: Measure;
};

export type Celestial = {
  name: string;
  size: number;
};
