export interface IStage {
  $match?: any;
  $sort?: any;
  $limit?: number;
  $skip?: number;
  $group?: any;
}