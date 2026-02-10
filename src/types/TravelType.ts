/**
 * Représente un trajet complet avec ses waypoints
 */
export interface Route {
  /** Nom du trajet */
  name: string;
  /** Liste ordonnée des waypoints */
  waypoints: Waypoint[];
}

/**
 * Payload JSON à envoyer au backend
 */
export interface RoutePayload {
  /** Nom du trajet */
  name: string;
  /** Liste des waypoints avec leurs coordonnées et ordre */
  waypoints: Array<{
    lat: number;
    lng: number;
    label: string;
    order: number;
    type: TypeOfPoint;
  }>;
}
/**
 * Types relatifs aux waypoints (points d'étape)
 */

export type TypeOfPoint = "PAUSE" | "PASSAGE" | "EXTREMITY" | "USER";

/**
 * Représente un point d'étape (waypoint) dans le trajet
 */
export interface Waypoint {
  /** Identifiant unique du waypoint */
  id: string;
  /** Latitude (coordonnée géographique) */
  lat: number;
  /** Longitude (coordonnée géographique) */
  lng: number;
  /** Label/adresse du waypoint */
  label: string;
  /** Ordre dans le trajet (1-indexed) */
  order: number;
  /** Type du waypoint */
  type: TypeOfPoint;
}
