<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Models\Page;
use App\Models\Product;
use App\Models\Slider;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use App\Repositories\Eloquent\ProductRepository;


class HomeController extends Controller
{
    public function index()
    {


        $page = Page::where('key', 'home')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections){
            if($sections->file){
                $images[] = asset($sections->file->thumb_url_full);
            } else {
                $images[] = null;
            }

        }

        $_slider = [];
        $sliders = Slider::query()->where("status", 1)->with(['file', 'translation'])->get();
        foreach ($sliders as $item){
            $itm = [
                'title' => $item->title,
                'description' => $item->description,
                'file' => $item->file ? asset($item->file->thumb_url_full):null
            ];
            $_slider[] = $itm;
        }
//        dd($page->file);
//        dd(App::getLocale());
        $_products = app(ProductRepository::class)->getHomePageProducts();

        $special_offer = Product::with(['latestImage','translation','categories','categories.translation'])->where('special_price_tag',1)->inRandomOrder()->first();

        $products = [];
        $products['new_collection'] = [];
        $products['bunker'] = [];
        $products['day_product'] = [];
        $products['day_price'] = [];
        $products['special_price_tag'] = [];
        $products['popular'] = [];
        foreach ($_products as $product){
            $product_attributes = $product->attribute_values;

            $_result = [];

            foreach ($product_attributes as $item){
                $options = $item->attribute->options;
                $value = '';
                foreach ($options as $option){
                    if($item->attribute->type == 'select'){
                        if($item->integer_value == $option->id) {
                            $_result[$item->attribute->code] = $option->label;
                        }

                    }
                }

            }
            $product['attributes'] = $_result;

            if($product->new_collection) $products['new_collection'][] = $product;
            if($product->bunker) $products['bunker'][] = $product;
            if($product->day_product) $products['day_product'][] = $product;
            if($product->day_price) $products['day_price'][] = $product;
            if($product->special_price_tag) $products['special_price_tag'][] = $product;
            if($product->popular) $products['popular'][] = $product;
        }

        //dd($products);

        $_gallery = [];
        $galleries = Gallery::with('filesHome')->where('status',1)->get();
        if(count($galleries)){
            foreach ($galleries[0]->filesHome as $image){
                $_gallery[] = ['img' => asset($image->getFileUrlAttribute()), 'link' => '/','thumb' => $image->thumb_url_full];
            }
        }

        //dd($_gallery);

        return Inertia::render('Home', [
            'special_offer' => $special_offer,
            'gallery' => $_gallery,
            "sliders" => $_slider, "page" => $page, "seo" => [
            "title"=>$page->meta_title,
            "description"=>$page->meta_description,
            "keywords"=>$page->meta_keyword,
            "og_title"=>$page->meta_og_title,
            "og_description"=>$page->meta_og_description,

//            "image" => "imgg",
//            "locale" => App::getLocale()
        ],'products' => $products,'images' => $images])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);

    }


}
