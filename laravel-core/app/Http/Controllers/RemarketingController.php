<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Remarketing;
use App\Models\FacebookPage;
use App\Models\ProgramsGroup;
use App\Models\TemplatesGroup;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreRemarketingRequest;
use App\Http\Requests\UpdateRemarketingRequest;

class RemarketingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $remarketings = Remarketing::with('createdBy', 'updatedBy', 'deletedBy', 'templatesGroup', 'programsGroup', 'facebookPage')
        ->whereNull('deleted_by')
        ->whereNull('deleted_at')
        ->orderby('id', 'desc')
        ->get()->toArray();
        
        return Inertia::render('Remarketings/Index', [
            'remarketings' => $remarketings,
            'from' => 1,
            'to' => count($remarketings),
            'total' => count($remarketings),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $programsGroup = ProgramsGroup::with("createdBy", "updatedBy", "deletedBy", 'programs.group', 'programs.createdBy', 'programs.updatedBy')
        ->whereNull('deleted_by')
        ->whereNull('deleted_at')
        ->orderBy('id', 'desc')
        ->get()->toArray();

        $templatesGroup = TemplatesGroup::with("createdBy", "updatedBy", "deletedBy", 'templates.group', 'templates.createdBy', 'templates.updatedBy')
        ->whereNull('deleted_by')
        ->whereNull('deleted_at')
        ->orderBy('id', 'desc')
        ->get()->toArray();

        $pages = FacebookPage::whereNull('expired_at')->orderby('id', 'desc')->get()->toArray();

        return Inertia::render('Remarketings/Create', [
            'programsGroup' => $programsGroup,
            'templatesGroup' => $templatesGroup,
            'pages' => $pages,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRemarketingRequest $request)
    {
        $remarketing = Remarketing::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'facebook_page_id' => $request->input('facebook_page_id'),
            'programs_group_id' => $request->input('programs_group_id'),
            'templates_group_id' => $request->input('templates_group_id'),
            'created_by' => Auth::user()->id,
            'updated_by' => Auth::user()->id,
        ]);
        if ($remarketing) {
            return redirect()->route('remarketings.index')->with('success', 'Remarketing created successfully.');
        } else {
            return redirect()->back()->with('error', 'Remarketing could not be created.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Remarketing $remarketing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRemarketingRequest $request, Remarketing $remarketing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Remarketing $remarketing)
    {
        //
    }
}
