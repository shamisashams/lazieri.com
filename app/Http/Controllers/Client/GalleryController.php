<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use App\Models\Gallery;
use App\Models\Page;
use Inertia\Inertia;
use App\Repositories\Eloquent\GalleryRepository;

class GalleryController extends Controller
{
    protected $galleryRepository;

    public function __construct(GalleryRepository $galleryRepository)
    {
        $this->galleryRepository = $galleryRepository;
    }

    public function index()
    {
        $page = Page::where('key', 'gallery')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        $files = [];
        if ($page->images) $files = $page->files;


        $_gallery = [];
        $galleries = Gallery::with('files')->where('status', 1)->get();

        if (count($galleries)) {
            $_gallery = $galleries[0]->files()->paginate(12);
        }
        //dd($_gallery);


        return Inertia::render('Gallery', [
            "gallery" => $_gallery,
            "page" => $page, "seo" => [
                "title" => $page->meta_title,
                "description" => $page->meta_description,
                "keywords" => $page->meta_keyword,
                "og_title" => $page->meta_og_title,
                "og_description" => $page->meta_og_description,
                //            "image" => "imgg",
                //            "locale" => App::getLocale()
            ], 'gallery_img' => $files, 'images' => $images
        ])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }
}
