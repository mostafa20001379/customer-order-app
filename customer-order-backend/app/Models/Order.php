<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_name',
        'address',
        'order_date',
    ];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
