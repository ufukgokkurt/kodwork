export  const API_URL='https://www.themuse.com/api/public/jobs'

export interface Job {
    contents:String;
    name:String;
    id:Number;
    locations:[
        {
        name:String;
    }
    ]
    levels:[
        {
        name:String;
        }
    ]
    company:{
        name:String;
    };

}

 