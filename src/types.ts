export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  idealFor: string;
  badge?: string;
}

export interface TrackingStep {
  date: string;
  time: string;
  location: string;
  status: string;
  completed: boolean;
  current?: boolean;
}

export interface TrackingData {
  trackingCode: string;
  cteNumber: string;
  sender: string;
  recipient: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  status: 'coletado' | 'em_transito' | 'em_distribuicao' | 'entregue';
  statusLabel: string;
  percentage: number;
  vehiclePlate: string;
  driverName: string;
  cargoType: string;
  temperature?: string;
  steps: TrackingStep[];
}

export interface RouteInfo {
  origin: string;
  destination: string;
  distanceKm: number;
  transitTimeHours: number;
  frequency: string;
  highway: string;
}

export interface FleetVehicle {
  model: string;
  category: string;
  capacityTon: number;
  paletteCapacity: number;
  features: string[];
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  sector: string;
  rating: number;
}
