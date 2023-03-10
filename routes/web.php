<?php
/**
 *  routes/web.php
 *
 * Date-Time: 03.06.21
 * Time: 15:41
 * @author Insite LLC <hello@insite.international>
 */

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\TranslationController;
use App\Http\Controllers\CKEditorController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ContactController;
use App\Http\Controllers\Client\AboutUsController;
use Illuminate\Support\Facades\Route;

Route::post('ckeditor/image_upload', [CKEditorController::class, 'upload'])->name('upload');

Route::any('bog/callback/status', [\App\BogPay\BogCallbackController::class, 'status'])->withoutMiddleware('web')->name('bogCallbackStatus');
Route::any('bog/callback/refund',[\App\BogPay\BogCallbackController::class, 'refund'])->withoutMiddleware('web')->name('bogCallbackRefund');

Route::redirect('', config('translatable.fallback_locale'));
Route::prefix('{locale?}')
    ->middleware(['setlocale'])
    ->group(function () {
        Route::prefix('adminpanel')->group(function () {
            Route::get('login', [LoginController::class, 'loginView'])->name('loginView');
            Route::post('login', [LoginController::class, 'login'])->name('login');


            Route::middleware('auth')->group(function () {
                Route::get('logout', [LoginController::class, 'logout'])->name('logout');

                Route::redirect('', 'adminpanel/category');

                // Language
                Route::resource('language', LanguageController::class);
                Route::get('language/{language}/destroy', [LanguageController::class, 'destroy'])->name('language.destroy');

                // Translation
                Route::resource('translation', TranslationController::class);

                // Category
                Route::resource('category', \App\Http\Controllers\Admin\CategoryController::class);
                Route::get('category/{category}/destroy', [\App\Http\Controllers\Admin\CategoryController::class, 'destroy'])->name('category.destroy');
                Route::post('category/{category?}/upload-cropped', [\App\Http\Controllers\Admin\CategoryController::class, 'uploadCropped'])->name('category.crop-upload');
//
                // Product
                Route::resource('product', \App\Http\Controllers\Admin\ProductController::class);
                Route::get('product/{product}/destroy', [\App\Http\Controllers\Admin\ProductController::class, 'destroy'])->name('product.destroy');
                Route::post('product/{product?}/upload-cropped', [\App\Http\Controllers\Admin\ProductController::class, 'uploadCropped'])->name('product.crop-upload');

//                // Gallery
                Route::resource('gallery', GalleryController::class);
                Route::get('gallery/{gallery}/destroy', [GalleryController::class, 'destroy'])->name('gallery.destroy');
                Route::post('gallery/{gallery?}/upload-cropped', [\App\Http\Controllers\Admin\GalleryController::class, 'uploadCropped'])->name('gallery.crop-upload');


                //Partners
                Route::get('partner', [\App\Http\Controllers\Admin\PartnerController::class,'index'])->name('partner.index');
                Route::put('partner', [\App\Http\Controllers\Admin\PartnerController::class,'update'])->name('partner.update');



                // Slider
                Route::resource('slider', SliderController::class);
                Route::get('slider/{slider}/destroy', [SliderController::class, 'destroy'])->name('slider.destroy');
                Route::post('slider/{slider?}/upload-cropped', [\App\Http\Controllers\Admin\SliderController::class, 'uploadCropped'])->name('slider.crop-upload');

                // Page
                Route::resource('page', PageController::class);
                Route::get('page/{page}/destroy', [PageController::class, 'destroy'])->name('page.destroy');
                Route::post('page-section/upload-cropped', [\App\Http\Controllers\Admin\PageController::class, 'uploadCropped'])->name('page-section.crop-upload');


                Route::get('setting/active',[SettingController::class,'setActive'])->name('setting.active');
                // Setting
                Route::resource('setting', SettingController::class);
                Route::get('setting/{setting}/destroy', [SettingController::class, 'destroy'])->name('setting.destroy');


                Route::resource('order', \App\Http\Controllers\Admin\OrderController::class);
                //Route::get('order/{order}/destroy', [\App\Http\Controllers\Admin\OrderController::class, 'destroy'])->name('order.destroy');

                // Password
                Route::get('password', [\App\Http\Controllers\Admin\PasswordController::class, 'index'])->name('password.index');
                Route::post('password', [\App\Http\Controllers\Admin\PasswordController::class, 'update'])->name('password.update');

                Route::resource('attribute', \App\Http\Controllers\Admin\AttributeController::class);
                Route::get('attribute/{attribute}/destroy', [\App\Http\Controllers\Admin\AttributeController::class, 'destroy'])->name('attribute.destroy');

                Route::get('subscribers', [\App\Http\Controllers\Admin\SubscriberController::class,'index'])->name('subscriber.index');

                Route::resource('team', \App\Http\Controllers\Admin\TeamController::class);
                Route::get('team/{team}/destroy', [\App\Http\Controllers\Admin\TeamController::class, 'destroy'])->name('team.destroy');
                Route::post('team/{team?}/upload-cropped', [\App\Http\Controllers\Admin\TeamController::class, 'uploadCropped'])->name('team.crop-upload');

            });
        });
        Route::middleware(['active'])->group(function () {

            // Home Page
            Route::get('', [HomeController::class, 'index'])->name('client.home.index');



            // Contact Page
            Route::get('/contact', [ContactController::class, 'index'])->name('client.contact.index');
            Route::post('/contact-us', [ContactController::class, 'mail'])->name('client.contact.mail');


            // About Page
            Route::get('about', [AboutUsController::class, 'index'])->name('client.about.index');

            Route::get('team', [\App\Http\Controllers\Client\TeamController::class, 'index'])->name('client.team.index');

            Route::get('gallery', [\App\Http\Controllers\Client\GalleryController::class, 'index'])->name('client.gallery.index');

            Route::get('partners', [\App\Http\Controllers\Client\PartnerController::class, 'index'])->name('client.partner.index');

            Route::get('service', [\App\Http\Controllers\Client\ServiceController::class, 'index'])->name('client.service.index');

            // Product Page
            Route::get('products', [\App\Http\Controllers\Client\ProductController::class, 'index'])->name('client.product.index');
           Route::get('project/{product}', [\App\Http\Controllers\Client\ProductController::class, 'show'])->name('client.product.show');

           Route::get('{project}/projects',[\App\Http\Controllers\Client\CategoryController::class,'show'])->name('client.category.show');
            Route::get('projects',[\App\Http\Controllers\Client\CategoryController::class,'index'])->name('client.category.index');
            Route::get('popular',[\App\Http\Controllers\Client\CategoryController::class,'popular'])->name('client.category.popular');
            Route::get('special-offer',[\App\Http\Controllers\Client\CategoryController::class,'special'])->name('client.category.special');
            Route::get('new',[\App\Http\Controllers\Client\CategoryController::class,'new'])->name('client.category.new');

            //checkout
            Route::get('cart',[\App\Http\Controllers\Client\CartController::class,'index'])->name('client.cart.index');
            Route::get('checkout',[\App\Http\Controllers\Client\OrderController::class,'index'])->name('client.checkout.index');
            Route::post('checkout',[\App\Http\Controllers\Client\OrderController::class,'order'])->name('client.checkout.order');
            Route::get('order/success',[\App\Http\Controllers\Client\OrderController::class,'statusSuccess'])->name('order.success');
            Route::get('order/failure',[\App\Http\Controllers\Client\OrderController::class,'statusFail'])->name('order.failure');

            Route::post('search', [\App\Http\Controllers\Client\SearchController::class, 'index'])->name('search.index');

            Route::any('payments/bog/status',[\App\Http\Controllers\Client\OrderController::class, 'bogResponse'])->name('bogResponse');

            /*Route::get('test/{method}',function ($locale,$method,\App\Http\Controllers\TestController $testController){

                return $testController->{$method}();
            });

            Route::post('test/filter',[\App\Http\Controllers\TestController::class,'filter']);*/
            Route::post('subscribe',[\App\Http\Controllers\Client\SubscribeController::class,'subscribe'])->name('client.subscribe.subscribe');
        });
    });


