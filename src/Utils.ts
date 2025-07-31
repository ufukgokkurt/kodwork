export  const API_URL='https://www.themuse.com/api/public/jobs'

export interface Job {
    contents:String;
    name:String;
    id:Number;
    locations: { name: string }[];
    levels: { name: string }[];
    company: { name: string };
};

export interface FavoriteState {
  jobs: Job[];
}
 

 