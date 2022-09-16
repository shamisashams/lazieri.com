<?php
/**
 *  app/Repositories/Eloquent/Base/BaseRepository.php
 *
 * Date-Time: 04.06.21
 * Time: 09:41
 * @author Insite LLC <hello@insite.international>
 */

namespace App\Repositories\Eloquent\Base;

use App\Models\File;
use Illuminate\Database\Eloquent\Model;
use ReflectionClass;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Class BaseRepository
 * @package App\Repositories\Eloquent\Base
 */
class BaseRepository implements EloquentRepositoryInterface
{

    /**
     * @var \Illuminate\Database\Eloquent\Model
     */
    public $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function getData($request, array $with = [])
    {
        $data = $this->model->filter($request)->with($with);

        $perPage = 10;

        if ($request->filled('per_page')) {
            $perPage = $request->per_page;
        }

        return $data->paginate($perPage);
    }

    /**
     * Get all
     *
     * @param array $columns
     * @param array $with
     *
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function all(array $columns = ["*"],array $with = [])
    {
        return $this->model->with($with)->get($columns);
    }

    /**
     * Create new model
     *
     * @param array $attributes
     *
     * @return Model
     */
    public function create(array $attributes = []): Model
    {
       // try {
            return $this->model->create($attributes);

        //} catch (\Illuminate\Database\QueryException $exception) {
            //return $exception->errorInfo;
       // }
    }

    /**
     * Update model by the given ID
     *
     * @param integer $id
     * @param array $data
     *
     * @return mixed
     */
    public function update(int $id, array $data = [])
    {
        $this->model = $this->findOrFail($id);
        try {
            //dd($data);
            return $this->model->update($data);
        } catch (\Illuminate\Database\QueryException $exception) {
            return $exception->errorInfo;
        }
    }

    /**
     * Delete model by the given ID
     *
     * @param integer $id
     *
     * @return \Illuminate\Database\Eloquent\Model|string
     */
    public function delete(int $id)
    {
        $this->model = $this->findOrFail($id);
        try {
            $this->model->delete($id);
            return $this->findTrash($id);
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    /**
     * Find model by the given ID
     *
     * @param integer $id
     * @param array $columns
     *
     * @return mixed
     */
    public function findOrFail(int $id, array $columns = ['*'])
    {
        $data = $this->model->find($id, $columns);
        if (!$data) {
            throw new NotFoundHttpException();
        }
        return $data;
    }

    /**
     * Restore model by the given ID
     *
     * @param integer $id
     *
     * @return Model
     */
    public function findTrash(int $id): Model
    {
        $model = $this->model->withTrashed()->find($id);
        if (null === $model) {
            throw new NotFoundHttpException();
        }

        if (null === $model->deleted_at) {
            throw new NotFoundHttpException();
        }
        return $model;
    }

    /**
     * Create new model
     *
     * @param int $id
     * @param $request
     *
     * @return Model
     * @throws \ReflectionException
     */
    public function saveFiles(int $id, $request): Model
    {
        $this->model = $this->findOrFail($id);
        // Delete old files if exist
        if (count($this->model->files)) {

            foreach ($this->model->files as $file) {
                $file->update(['main' => 0,'cover' => 0,'in_middle_1' => 0,'in_middle_2' => 0]);
                if (!$request->old_images) {
                    $file->delete();
                    continue;
                }
                if (!in_array((string)$file->id, $request->old_images, true)) {
                    $file->delete();
                }
            }
        }

        $this->model->files()->where('id',$request->post('main'))->update(['main'=>1]);
        $this->model->files()->where('id',$request->post('in_middle_1'))->update(['in_middle_1'=>1]);
        $this->model->files()->where('id',$request->post('in_middle_2'))->update(['in_middle_2'=>1]);
        $this->model->files()->where('id',$request->post('cover'))->update(['cover'=>1]);

        if ($request->hasFile('images')) {
            // Get Name Of model
            $reflection = new ReflectionClass(get_class($this->model));
            $modelName = $reflection->getShortName();

            foreach ($request->file('images') as $key => $file) {
                $imagename = date('Ymhs') . str_replace(' ', '', $file->getClientOriginalName());
                $destination = base_path() . '/storage/app/public/' . $modelName . '/' . $this->model->id;
                $request->file('images')[$key]->move($destination, $imagename);

                $main = 0;
                $cover = 0;
                $middle_1 = 0;
                $middle_2 = 0;

                switch ($key){
                    case 0:
                        $main = 1;
                        break;
                    case 1:
                        $cover = 1;
                        break;
                    case 2:
                        $middle_1 = 1;
                        break;
                    case 3:
                        $middle_2 = 1;
                        break;
                }

                $this->model->files()->create([
                    'title' => $imagename,
                    'path' => 'storage/' . $modelName . '/' . $this->model->id,
                    'format' => $file->getClientOriginalExtension(),
                    'type' => File::FILE_DEFAULT,
                    'main' => $main,
                    'cover' => $cover,
                    'in_middle_1' => $middle_1,
                    'in_middle_2' => $middle_2
                ]);
            }
        }

        return $this->model;
    }
}
