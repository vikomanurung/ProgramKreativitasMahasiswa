<?php

namespace common\models\notif;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use common\models\notif\Notification;

/**
 * NotificationSearch represents the model behind the search form about `common\models\notif\Notification`.
 */
class NotificationSearch extends Notification
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'key_id', 'user_id', 'seen'], 'integer'],
            [['key', 'type', 'created_at'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Notification::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        $query->andFilterWhere([
            'id' => $this->id,
            'key_id' => $this->key_id,
            'user_id' => $this->user_id,
            'seen' => $this->seen,
            'created_at' => $this->created_at,
        ]);

        $query->andFilterWhere(['like', 'key', $this->key])
            ->andFilterWhere(['like', 'type', $this->type]);

        return $dataProvider;
    }
}
