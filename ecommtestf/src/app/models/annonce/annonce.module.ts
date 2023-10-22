export interface Annonce{
  id:number;
  category_id:number | null,
  souscategory_id:number | null,
  user_id:number,
  type:number;
  domaine:string,
  contrat:string,
  entreprise:string,
  niveaua:string,
  poste:string,
  salaire:string,
  marque:string,
  marquem:string,
  modele:string,
  annee:string,
  km:string,
  carburant:string,
  puissance:string,
  poidsl:string,
  piece:string,
  autrepi:string,
  surface:string,
  chambre:string,
  salleb:string,
  faces:string,
  name:string,
  title:string,
  slug:string,
  description:string,
  prix:number,
  image:string,
  images:string,
}