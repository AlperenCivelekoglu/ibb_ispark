// src/components/MarkerCluster.js
import { divIcon, point } from "leaflet";

class MarkerCluster {
  constructor() {
    this.createClusterCustomIcon = this.createClusterCustomIcon.bind(this);
  }

  createClusterCustomIcon(cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  }
}

export default MarkerCluster;
