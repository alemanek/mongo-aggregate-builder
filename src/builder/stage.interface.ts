export interface IStage {
  $match?: Record<string, unknown>;
  $sort?: Record<string, unknown>;
  $limit?: number;
  $skip?: number;
  $group?: Record<string, unknown>;
}