<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AnnoncesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'              => $this->id,
            'category'        => $this->category_id,
            'souscategory'    => $this->souscategory_id,
            'user'            => $this->user_id,
            'type'            => $this->type,
            'domaine'         => $this->domaine,
            'contrat'         => $this->contrat,
            'entreprise'      => $this->entreprise,
            'niveau'          => $this->niveaua,
            'post'            => $this->post,
            'salaire'         => $this->salaire,
            'marque'          => $this->marque,
            'marquem'         => $this->marquem,
            'modele'          => $this->model,
            'annee'           => $this->annee,
            'km'              => $this->km,
            'carburant'       => $this->carburant,
            'puissance'       => $this->puissance,
            'poids'           => $this->poidsl,
            'piece'           => $this->piece,
            'otherPiece'      => $this->autrepi,
            'sureface'        => $this->sureface,
            'chambre'         => $this->chambre,
            'salleb'          => $this->salleb,
            'faces'           => $this->faces,
            'name'            => $this->name,
            'title'           => $this->title,
            'slug'            => $this->slug,
            'description'     => $this->description,
            'prix'            => $this->prix,
            'image'           => asset('storage/'.$this->image),
            'images'          => asset('storage/'.$this->images),
            'created'         => $this->created_at,
            'updated'         => $this->updated_at
        ];
    }
}
