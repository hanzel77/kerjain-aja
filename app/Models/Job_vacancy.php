<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Job_vacancy extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'job_vacancy';
    protected $guarded = 'id';

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function applications()
    {
        return $this->hasMany(Job_application::class, 'job_id');
    }
}
