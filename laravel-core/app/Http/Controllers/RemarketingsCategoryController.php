<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Remarketing;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Models\RemarketingsCategory;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreRemarketingsCategoryRequest;
use App\Http\Requests\UpdateRemarketingsCategoryRequest;

class RemarketingsCategoryController extends Controller
{

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Remarketings/CreateCategory');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRemarketingsCategoryRequest $request)
    {
        $category = RemarketingsCategory::create([
            "name" => $request->input('name'), 
            "description" => $request->input('description'), 
            "created_by" => Auth::user()->id,
            "updated_by" => Auth::user()->id,
        ]);
        if ($category) {
            return redirect()->route('programs.index')->with('success', 'Category of remarketings created successfully.');
        } else {
            return redirect()->back()->with('error', 'Category of remarketings could not be created.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RemarketingsCategory $category)
    {
        return Inertia::render('Remarketings/EditCategory', ["category" => $category]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRemarketingsCategoryRequest $request, RemarketingsCategory $category)
    {
        $category->update([
            "name" => $request->input('name'), 
            "description" => $request->input('description'), 
            'updated_by' => Auth::user()->id,
        ]);
    
        if ($category->wasChanged()) {
            return redirect()->route('programs.index')->with('success', 'Category of remarketings edited successfully.');
        } else {
            return redirect()->back()->with('error', 'Category of remarketings could not be edited.');
        }
    }

    /**
     * Duplicate the form for editing the specified resource.
     */
    public function duplicate(RemarketingsCategory $category)
    {
        DB::beginTransaction();

        try {
            $newCategory = $category->replicate();
            $newCategory->name = $category->name . ' (Copy)';
            $newCategory->created_at = now();
            $newCategory->created_by = Auth::id();
            $newCategory->updated_at = now();
            $newCategory->updated_by = Auth::id();
            $newCategory->save();

            foreach ($category->remarketings as $remarketing) {
                $newRemarketing = $remarketing->replicate();
                $newRemarketing->category = $newCategory->id;
                $newRemarketing->created_at = now();
                $newRemarketing->created_by = Auth::id();
                $newRemarketing->updated_at = now();
                $newRemarketing->updated_by = Auth::id();
                $newRemarketing->is_active = false;
                $newRemarketing->save();
            }

            DB::commit();
            return redirect()->route('remarketings.index')->with('success', 'Remarketing duplicated successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Error duplicating remarketing: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Failed to duplicate the remarketing.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RemarketingsCategory $category)
    {
        $category->update([
            'deleted_by' => Auth::user()->id,
            'deleted_at' => now(),
        ]);
        Remarketing::where('category', $category->id)->update([
            'deleted_by' => Auth::user()->id,
            'deleted_at' => now(),
        ]);
        if ($category ->wasChanged()) {
            return redirect()->route('programs.index')->with('success', 'Category of remarketings deleted successfully.');
        } else {
            return redirect()->back()->with('error', 'Category of remarketings could not be deleted.');
        }
    }
}
