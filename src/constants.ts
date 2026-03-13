export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  category: 'Knippen' | 'Kleuren' | 'Styling' | 'Verzorging';
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export const SERVICES: Service[] = [
  { id: '1', name: 'Wassen & Knippen (Dames)', price: '€45,00', duration: '45 min', category: 'Knippen' },
  { id: '2', name: 'Wassen & Knippen (Heren)', price: '€35,00', duration: '30 min', category: 'Knippen' },
  { id: '3', name: 'Kinderen t/m 12 jaar', price: '€25,00', duration: '20 min', category: 'Knippen' },
  { id: '4', name: 'Volledige Kleuring', price: 'vanaf €65,00', duration: '90 min', category: 'Kleuren' },
  { id: '5', name: 'Balayage / Highlights', price: 'vanaf €85,00', duration: '120 min', category: 'Kleuren' },
  { id: '6', name: 'Föhnen & Styling', price: '€30,00', duration: '30 min', category: 'Styling' },
  { id: '7', name: 'Haarmasker & Massage', price: '€15,00', duration: '15 min', category: 'Verzorging' },
];

export const TEAM: Stylist[] = [
  {
    id: '1',
    name: 'Sophie',
    role: 'Master Stylist & Eigenaar',
    bio: 'Met meer dan 15 jaar ervaring is Sophie de drijvende kracht achter Knip & Stijl. Specialist in kleurtechnieken.',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: '2',
    name: 'Marc',
    role: 'Senior Stylist',
    bio: 'Marc is onze expert voor herenkapsels en strakke fades. Hij houdt van een persoonlijke aanpak.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: '3',
    name: 'Elena',
    role: 'Color Specialist',
    bio: 'Elena tovert met kleuren. Van subtiele highlights tot gedurfde balayages, zij weet wat bij je past.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: '4',
    name: 'Lucas',
    role: 'Junior Stylist',
    bio: 'Lucas is ons jonge talent met een frisse blik op de nieuwste trends en styling technieken.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=500'
  }
];

export const REVIEWS: Review[] = [
  { id: '1', author: 'Anouk de Vries', rating: 5, text: 'Eindelijk een kapper die echt luistert! Mijn haar zit fantastisch.', date: '2 weken geleden' },
  { id: '2', author: 'Pieter Jansen', rating: 5, text: 'Top service en een heerlijke sfeer. Marc is een vakman.', date: '1 maand geleden' },
  { id: '3', author: 'Sarah Berg', rating: 4, text: 'Prachtige salon en erg vriendelijk personeel. De koffie is ook heerlijk!', date: '3 dagen geleden' }
];
