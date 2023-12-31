<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Tymon\JWTAuth\Facades\JWTAuth;


class ChatDirectMessageEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $response;


    /**
     * Create a new event instance.
     *
     * @return void
     */
     public function __construct($data)
    {
        $this->response = [
            'message'       => $data['message'],
            'authUserId'    => $data['authUserId'], 
            'from'          => JWTAuth::user() 
        ];
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-direct-message.' . $this->response['authUserId']);
    }
}
