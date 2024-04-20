<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $orders = Order::with('items')->paginate(10);
        return response()->json($orders);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'customer_name' => 'required',
            'address' => 'required',
            'order_date' => 'required|date',
            'items.*.product_name' => 'required',
            'items.*.quantity' => 'required|numeric',
            'items.*.price_per_unit' => 'required|numeric',
        ]);

        $order = Order::create($validatedData);
        foreach ($request->input('items') as $item) {
            $order->items()->create($item);
        }

        return response()->json($order, 201);
    }

    public function show(Order $order)
    {
        $order->load('items');
        return response()->json($order);
    }

    public function update(Request $request, Order $order)
    {
        $validatedData = $request->validate([
            'customer_name' => 'required',
            'address' => 'required',
            'order_date' => 'required|date',
            'items.*.id' => 'required_with:items.*.product_name,items.*.quantity,items.*.price_per_unit',
            'items.*.product_name' => 'required',
            'items.*.quantity' => 'required|numeric',
            'items.*.price_per_unit' => 'required|numeric',
        ]);

        $order->update($validatedData);
        foreach ($validatedData['items'] as $item) {
            if (isset($item['id'])) {
                $orderItem = OrderItem::findOrFail($item['id']);
                $orderItem->update($item);
            } else {
                $order->items()->create($item);
            }
        }

        return response()->json($order);
    }

    public function destroy(Order $order)
    {
        $order->delete();
        return response()->json(null, 204);
    }
}
