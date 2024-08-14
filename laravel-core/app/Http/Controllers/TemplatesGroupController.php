<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Template;
use App\Models\TemplatesGroup;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreTemplatesGroupRequest;
use App\Http\Requests\UpdateTemplatesGroupRequest;

class TemplatesGroupController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Templates/CreateGroup');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTemplatesGroupRequest $request)
    {
        $group = TemplatesGroup::create([
            "name" => $request->input('name'), 
            "description" => $request->input('description'), 
            "total_used" => 0, 
            "total_orders" => 0, 
            "total_responses" => 0, 
            "created_by" => Auth::user()->id,
            "updated_by" => Auth::user()->id,
        ]);
        if ($group) {
            return redirect()->route('templates.index')->with('success', 'Group of templates created successfully.');
        } else {
            return redirect()->back()->with('error', 'Group of templates could not be created.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TemplatesGroup $group)
    {
        return Inertia::render('Templates/EditGroup', ['group' => $group]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTemplatesGroupRequest $request, TemplatesGroup $group)
    {
        $group->update([
            "name" => $request->input('name'), 
            "description" => $request->input('description'), 
            'updated_by' => Auth::user()->id,
        ]);
    
        if ($group->wasChanged()) {
            return redirect()->route('templates.index')->with('success', 'Group of templates edited successfully.');
        } else {
            return redirect()->back()->with('error', 'Group of templates could not be edited.');
        }
    }

    /**
     * Duplicate the form for editing the specified resource.
     */
    public function duplicate(TemplatesGroup $group)
    {
        DB::beginTransaction();

        try {
            $newGroup = $group->replicate();
            $newGroup->name = $newGroup->name . ' (Copy)';
            $newGroup->created_at = now();
            $newGroup->created_by = Auth::id();
            $newGroup->updated_at = now();
            $newGroup->updated_by = Auth::id();
            $newGroup->save();

            foreach ($group->templates as $template) {
                $newTemplate = $template->replicate();
                $newTemplate->group_id = $newGroup->id;
                $newTemplate->created_at = now();
                $newTemplate->created_by = Auth::id();
                $newTemplate->updated_at = now();
                $newTemplate->updated_by = Auth::id();
                $newTemplate->save();
            }
            
            DB::commit();
            return redirect()->route('programs.groups.index')->with('success', 'Group duplicated successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Error duplicating group: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Failed to duplicate the group.');
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TemplatesGroup $group)
    {
        $group->update([
            'deleted_by' => Auth::user()->id,
            'deleted_at' => now(),
        ]);
        Template::where('group_id', $group->id)->update([
            'deleted_by' => Auth::user()->id,
            'deleted_at' => now(),
        ]);
        if ($group->wasChanged()) {
            return redirect()->route('templates.index')->with('success', 'Group of templates deleted successfully.');
        } else {
            return redirect()->back()->with('error', 'Group of templates could not be deleted.');
        }
    }
}
