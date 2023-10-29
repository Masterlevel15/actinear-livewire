<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function users() {
        return $this->belongsToMany(\App\Models\User::class);
    }

    public function activities() {
        return $this->hasToMany(\App\Models\Activity::class);
    }
}
