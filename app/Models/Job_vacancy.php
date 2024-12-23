<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Job_vacancy extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';
    protected $table = 'job_vacancy';
    protected $guarded = 'id';

     protected static function newFactory()
    {
        return \Database\Factories\JobVacancyFactory::new();
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function applications()
    {
        return $this->hasMany(Job_application::class, 'job_id');
    }
}
