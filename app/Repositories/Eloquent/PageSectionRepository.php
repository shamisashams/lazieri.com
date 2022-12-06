<?php
/**
 *  app/Repositories/Eloquent/ProductRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Insite LLC <hello@insite.international>
 */

namespace App\Repositories\Eloquent;


use App\Models\File;
use App\Models\PageSection;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\PageSectionRepositoryInterface;
use Gumlet\ImageResize;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use ReflectionClass;

/**
 * Class LanguageRepository
 * @package App\Repositories\Eloquent
 */
class PageSectionRepository extends BaseRepository implements PageSectionRepositoryInterface
{
    /**
     * @param \App\Models\Product $model
     */
    public function __construct(PageSection $model)
    {
        parent::__construct($model);
    }


    public function saveFile(int $id, $request): Model
    {
        //dd($request->file('image'));

        if($request->hasFile('image')){
            foreach ($request->file('image') as $key => $file){
                $model = $this->model->where('id',$key)->first();

                if ($model->file){
                    Storage::delete($model->file->getFileUrlAttribute());
                    $model->file->delete();
                }


            }
        }




        if ($request->hasFile('image')) {
            // Get Name Of model
            $reflection = new ReflectionClass(get_class($this->model));
            $modelName = $reflection->getShortName();

            //dd($modelName);

            foreach ($request->file('image') as $key => $file) {
                $imagename = date('Ymhs') . str_replace(' ', '', $file->getClientOriginalName());
                $destination = base_path() . '/storage/app/public/' . $modelName . '/' . $key;
                $request->file('image')[$key]->move($destination, $imagename);
                $model = $this->model->where('id',$key)->first();
                $model->file()->create([
                    'title' => $imagename,
                    'path' => 'storage/' . $modelName . '/' . $key,
                    'format' => $file->getClientOriginalExtension(),
                    'type' => File::FILE_DEFAULT
                ]);
            }
        }

        return $this->model;
    }

    public function saveFile2(int $id, $request,$height = 800, $width = 800): Model
    {
        //dd($request->file('image'));

        $this->model = $this->findOrFail($id);
        $data = explode(',', $request->post('base64_img'));
// Decode the base64 data
        $data = base64_decode($data[1]);



        if ($request->post('base64_img')) {
            // Get Name Of model
            $reflection = new ReflectionClass(get_class($this->model));
            $modelName = $reflection->getShortName();


            $imagename = date('Ymdhis') .'crop.png';
            $destination = base_path() . '/storage/app/public/' . $modelName . '/' . $this->model->id;

            $image =  ImageResize::createFromString($data);
            $image->resizeToHeight($height);

            //$image->crop($width, $height, false, ImageResize::CROPCENTER);
            //$image->save(date('Ymhs') . $file->getClientOriginalName());
            $img = $image->getImageAsString();

            $thumb = 'public/' . $modelName . '/' . $this->model->id .'/thumb/'.$imagename;

            Storage::put('public/' . $modelName . '/' . $this->model->id . '/' . $imagename,$data);

            Storage::put($thumb,$img);

            $this->model->files()->create([
                'title' => $imagename,
                'path' => 'storage/' . $modelName . '/' . $this->model->id,
                'format' => 'png',
                'type' => File::FILE_DEFAULT,
            ]);

        }
        return $this->model;
    }

}
