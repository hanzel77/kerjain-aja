<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Job_vacancy extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'job_vacancy';
    protected $guarded = 'id';

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
