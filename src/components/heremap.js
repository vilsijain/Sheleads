import { useEffect, useRef } from "react";

const HereMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: import.meta.env.VITE_HERE_API_KEY,
    });

    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(
      mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: 28.6139, lng: 77.209 }, // New Delhi
        zoom: 11,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );

    new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    H.ui.UI.createDefault(map, defaultLayers);

    // Example: Add event pin
    const eventMarker = new H.map.Marker({ lat: 28.61, lng: 77.23 });
    map.addObject(eventMarker);

    return () => map.dispose();
  }, []);

  return (
    <div ref={mapRef} style={{ width: "100%", height: "400px", borderRadius: "12px" }} />
  );
};

export default HereMap;
