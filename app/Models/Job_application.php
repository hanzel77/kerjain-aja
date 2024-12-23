<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Job_application extends Model
{
    use HasFactory;
    protected $table = 'job_applications';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];

    protected static function newFactory()
    {
        return \Database\Factories\JobApplicationFactory::new();
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(user::class, 'user_id');
    }
    public function job_vacancy(): BelongsTo
    {
        return $this->belongsTo(Job_vacancy::class, 'job_id');
    }
}
