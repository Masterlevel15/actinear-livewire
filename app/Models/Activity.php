<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    public function country() {
        return $this->belongsTo(\App\Models\Country::class);
    }

    public function city() {
        return $this->belongsTo(\App\Models\City::class);
    }

    public function category() {
        return $this->belongsTo(\App\Models\Category::class);
    }
    //organisateur
    public function promoter() {
        return $this->belongsTo(\App\Models\User::class);
    }
    /*
    public function users() {
        return $this->belongsToMany(\App\Models\User::class, 'users_has_activities');
    }
    */

    //Bookmark
    public function usersWhoBookmarked()
    {
        return $this->belongsToMany(User::class, 'bookmarked_activities')->withTimestamps();
    }

    //inscription
    public function registeredUsers()
    {
        return $this->belongsToMany(User::class);
    }


}
