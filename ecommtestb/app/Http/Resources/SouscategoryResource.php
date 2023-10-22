<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SouscategoryResource extends JsonResource
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
            'slug'            => $this->slug,
            'category'        => $this->category_id,
            'created'         => $this->created_at,
            'updated'         => $this->updated_at
        ];
    }
}
