<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];

    /*
    public function activities() {
        return $this->belongsToMany(\App\Models\Activity::class, 'users_has_activities');
    }
    */
    //activités du promoter
    public function organizedActivities()
    {
        return $this->hasMany(Activity::class, 'promoter_id');
    }

    //Bookmark
    public function bookmarkedActivities()
    {
        return $this->belongsToMany(Activity::class, 'bookmarked_activities')->withTimestamps();
    }

    //inscription
    public function registeredActivities()
    {
        return $this->belongsToMany(Activity::class);
    }

    // Note donnée par l'utilisateur
    public function givenRatings()
    {
    return $this->belongsToMany(User::class, 'ratings', 'user_id', 'promoter_id')
                ->withPivot('rating')
                ->withTimestamps();
    }

    // Note reçue par l'organisateur
    public function receivedRatings()
    {
        return $this->belongsToMany(User::class, 'ratings', 'promoter_id', 'user_id')
                    ->withPivot('rating')
                    ->withTimestamps();
    }

    //note moyenne de l'organisateur (promoter)
    public function averageRating()
    {
        return $this->receivedRatings()->avg('rating'); // En supposant que vous avez une relation `receivedRatings` pour les notations reçues par cet utilisateur.
    }

}
