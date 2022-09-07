<?php

namespace App\Models;

use App\Models\Translations\SettingTranslation;
use App\Traits\ScopeFilter;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\SoftDeletes;

class Subscriber extends Model
{
    use HasFactory, ScopeFilter;


    protected $table = 'subscribers';

    protected $fillable = [
        'email'
    ];




    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'email' => [
                'hasParam' => true,
                'scopeMethod' => 'email'
            ],

        ];
    }


}
