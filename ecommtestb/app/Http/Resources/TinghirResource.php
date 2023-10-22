<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TinghirResource extends JsonResource
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
            'titre'       => $this->titre,
            'description' => $this->description,
            'slug'        => $this->slug,
            'image'       => asset('storage/'.$this->image),
            'created'         => $this->created_at,
            'updated'         => $this->updated_at 
        ];
    }
}
