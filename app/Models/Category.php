<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    /*
    public function users() {
        return $this->belongsToMany(\App\Models\User::class);
    }
    */
    public function activities() {
        return $this->hasMany(\App\Models\Activity::class);
    }

    //utilisateurs par catégorie category_user
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
