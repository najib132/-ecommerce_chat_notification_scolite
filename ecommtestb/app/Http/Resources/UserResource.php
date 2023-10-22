<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name'            => $this->name,
            'email'           => $this->email,  
            'phone'           => $this->telephone,
            'daten'           => $this->daten,
            'autreh'          => $this->autreh,
            'is_admin'        => $this->is_admin,
            'autrei'          => $this->autrei,
            'adressem'        => $this->adressema,
            'adresser'        => $this->adresser,
            'image'           => asset('storage/'.$this->image),
            'images'          => asset('storage/'.$this->images),
            'created'         => $this->created_at,
            'updated'         => $this->updated_at
        ];
    }
}
